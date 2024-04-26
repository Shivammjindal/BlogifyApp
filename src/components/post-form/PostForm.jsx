import React, {useCallback, useEffect} from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Select, RTE } from "../index.js"
import service from "../../appwrite/Conf.js";
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

function PostForm({post}) {

    // for continious monitering we have watch


    const {register, handleSubmit, watch, setValue, control, getValues} = useForm(
        {
            defaultValues: {
                title: post?.title || '',
                slug: post?.slug || '',
                content: post?.content || '',
                status: post?.status || 'active',
            }
        }
    )

    const navigate = useNavigate()
    const userData = useSelector(state => state.auth.userData)

    console.log("USER At Post :: ",userData)

    const submit = async (data) => {
        console.log("Data At Post :: ::  ",data)
        if(post){
            console.log("Post at Update ",post.featuredImage)

            const file = data.image[0]? await service.uploadFile(data.image[0]) : null

            if(file){
                console.log("File DELETE :: ",file)
                await service.deleteFile(post.featuredImage)
            }

            console.log("Step1 Upld")
            const dbPost = await service.updatePost(post.$id,{
                ...data,
                featuredImage: file? file.$id : undefined,
            })
            console.log("Step2 Upld",dbPost)

            if(dbPost) {
                console.log("DB POST Upld :: ",dbPost)
                navigate(`/post/${dbPost.$id}`)
            }
            
        }else{
            console.log("Data At PostForm ",data)
            const file = await service.uploadFile(data.image[0])
            console.log("FILE :: ",file)
            if(file){
                const fileId = file.$id
                data.featuredImage = fileId
                console.log("FINAL DATA O/P ",data.featuredImage)
                const dbPost = await service.createPost({
                    ...data,
                    userId : userData.$id
                })
                if(dbPost){
                    navigate(`/post/${dbPost.$id}`)
                }
            }
        }
    }

    const slugTransform = useCallback((value) => {
        if(value && typeof value === 'string'){
            return value
            .trim()
            .toLowerCase()
            .replace(/[^a-zA-Z\d\s]+/g,'-')
            .replace(/[\s]/g,'-')
        }
        console.log("Value is :: ",value);
        return ''
    },[])

    useEffect(() => {
        const subcription = watch((value, {name}) => {
            if(name === 'title'){
                setValue('slug', slugTransform(value.title),{shouldValidate: true})
                console.log("Slug :: ",slugTransform(value.title))
            }
        })
        return () => {
            subcription.unsubscribe()
        }
    },[watch, slugTransform, setValue])

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={service.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : "bg-blue-500"} className="w-full h-10 text-white">
                    {post ? "Update Post" : "Add Post"}
                </Button>
            </div>
        </form>
    )
}

export default PostForm