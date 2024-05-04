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
        if(posts.length) return;
        console.log("Getting posts")
        service.getPosts([]).then(
            (postsResponse) => {
                if(postsResponse){
                    setPosts(postsResponse.documents)
                }
                else{
                    setLoading("")
                    if(posts.length) setPosts([])
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
            posts.length? (
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
                    <div className='flex justify-center items-center h-40 text-5xl p-4 text-center font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent'>
                        Login/SignUp To Read Posts
                    </div>
                </Container>
            )
        )
    )
}

export default Home