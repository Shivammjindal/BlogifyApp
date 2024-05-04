import React from 'react'
import { useState } from 'react'
import authService from '../appwrite/auth.js'
import { Link,useNavigate } from "react-router-dom"
import { login } from '../store/authSlice'
import { Input,Button } from "./index.js"
import { useDispatch } from "react-redux"
import { useForm } from 'react-hook-form'

function Signup(){

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {register, handleSubmit} = useForm();
    const [error, setError] = useState("")

    const create = async (data) => {

        setError('')
        try {

            //checking weather user Already exists or not
            // const checkUser = authService.getUsers().map((user) => {
            //     if(user.email == data.email){
            //         return false
            //     }
            // })

            // if(!checkUser){
            //     alert("User Alreagy Exists ")
            //     navigate("/signup")
            // }
            // console.log("Check User :: ",checkUser);

            const userData = await authService.createAccount(data)
            if(userData){
                const userData = await authService.getCurrentUser()
                if(userData){
                    dispatch(login(userData))
                }
                navigate("/")
            }
        } catch (error) {
            console.log(error)
            setError("Error :: ",error)
        }
    }

    return (
        <>
        <div
            className="flex items-center justify-center w-full"
        >
            <div
                className={`mx-auto w-full max-w-lg bg-white rounded-xl p-10 border border-black/10`}
            >
                <div className="mb-2 flex justify-center">
                    <span>
                        <img src="https://thumbs.dreamstime.com/b/basic-rgb-145958704.jpg" alt="" className=' h-16 w-16' />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign Up {"(to Create Account)"}</h2>

                <p className="mt-2 text-center text-base text-black/60">
                    Already have any account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up 
                    </Link>
                </p>
                {error && <p className="text-red-500 text-center">
                    {error}</p>}
                
                <form onSubmit={handleSubmit(create)} className="mt-8">

                    <div className="space-y-5">
                        <Input
                        label="Full Name: "
                        placeholder="Enter your full name"
                        {...register("name", {
                            required: true,
                        })}
                        />
                        <Input
                        label="Email: "
                        placeholder="Enter your email"
                        type="email"
                        {...register("email", {
                            required: true,
                            // validate: {
                            //     matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                            //     "Email address must be a valid address",
                            // }
                        })}
                        />
                        <Input
                        label="Password: "
                        type="password"
                        placeholder="Enter your password"
                        {...register("password", {
                            required: true,})}
                        />
                        <Button
                            type="submit"
                            className="w-full"
                        >Create Account</Button>
                    </div>
                </form>
            </div>
        </div>
    </>
    );
}

export default Signup