import React,{useEffect} from 'react'
import service from '../appwrite/Conf'
import { Container,PostCard } from '../components'
import { useState } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import { useNavigate } from 'react-router-dom';
import '../App.css'

function Home(){

    

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState("Loading...")
    const color = ['#000000']
    const navigate = useNavigate()
    const [word, setWord] = useState('')

    function sleep(ms){
        return new Promise((resolve,reject) => setTimeout(resolve,ms))
    }

    const phrases = ['Craft your essence into words','Connecting minds, inspiring ideas','Elevate your life. Discover new ideas','Spark your curiosity. Stay one step ahead.']

    let currPhaseIndex = 0;
    const writeLoop = async () => {

        const ele = document.querySelector('.textFlow')

        while (true) {

            let currWord = phrases[currPhaseIndex];
            
            for(let i = 0; i < currWord.length; i++){
                ele.innerHTML = currWord.substring(0,i+1);
                await sleep(150);
            }

            for(let i = currWord.length ; i >= 0; i--){
                ele.innerHTML = currWord.substring(0,i-1);
                await sleep(40);
            }

            currPhaseIndex++;
            if(currPhaseIndex >= phrases.length)
                currPhaseIndex = 0
            
            await sleep(200);
        }
    }
    writeLoop();

    
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
                    <div className='flex flex-wrap overflow-scroll mt-2'>
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
                <div className='flex h-[500px] justify-center items-center'>
                    <div>
                    <div className='text-6xl p-4 font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent opacity-90 relative'>
                        Blogify <span className='textFlow'></span><span className='animateText text-indigo-600'>|</span>
                    </div>
                    <div className='flex justify-center mt-6'>
                        <div className='flex flex-col items-center gap-2'>
                            <div className='animate-bounce ...'>
                                <svg fill="#000000" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-46.06 -46.06 603.91 603.91" xml:space="preserve" stroke="#000000" stroke-width="51.1787"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M508.667,125.707c-4.16-4.16-10.88-4.16-15.04,0L255.76,363.573L18,125.707c-4.267-4.053-10.987-3.947-15.04,0.213 c-3.947,4.16-3.947,10.667,0,14.827L248.293,386.08c4.16,4.16,10.88,4.16,15.04,0l245.333-245.333 C512.827,136.693,512.827,129.867,508.667,125.707z"></path> </g> </g> </g></svg>
                            </div>
                            <button className=' p-3 text-lg rounded-lg bg-gradient-to-r from-pink-500   to-purple-600 text-white' onClick={() => {
                                navigate('/signup')
                            }}>
                                Getting Started
                            </button>
                        </div>
                        
                    </div>
                    </div>
                </div>
            )
        )
    )
}

export default Home