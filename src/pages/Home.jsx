import React,{useEffect} from 'react'
import service from '../appwrite/Conf'
import { Container,PostCard } from '../components'
import { useState } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";

function Home(){

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState("Loading...")
    const color = ['#000000']
    
    useEffect(() => {
        if(posts.length){
            setLoading("")
        }
        else{
            setLoading("Loading...")
        }
    },[posts])

    async function getPosts(){
        const posts = await service.getPosts([]).then(
            (posts) => {
                if(posts){
                    setPosts(posts.documents)
                }
                else{
                    setLoading("")
                    setPosts(false)
                }
            }
        )
    }
    getPosts();

    return (loading? (
            <Container>
                <div className='flex justify-center items-center my-10'>
                    <PropagateLoader
                        color={color}
                        loading={loading}
                        size={10}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </div>
            </Container>
        ):
        (
            posts? (
                <Container>
                    <div className='flex flex-wrap overflow-scroll'>
                        {
                            posts.map((post) => (
                                <div key={post.$id} className='p-2 w-1/4'>
                                    <PostCard {...post} />
                                </div>
                            ))

                        }
                    </div>
                </Container>
            )
            :
            (
                <Container className='w-full flex justify-center py-8 text-center h-44'>
                    <div className='flex justify-center items-center h-40'>
                        Login To Read Posts
                    </div>
                </Container>
            )
        )
    )
}

export default Home