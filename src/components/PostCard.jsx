import React from 'react'
import service from "../appwrite/Conf";
import { Link } from "react-router-dom";

function PostCard({
    $id,
    title,
    featuredImage,
}){

    return (
        <Link to={`/post/${$id}`}>
            <div className='flex-col bg-gradient-to-br from-fuchsia-200 via-purple-200 to-sky-200 rounded-xl w-[280px] h-[220px]'>
                    <div className='flex justify-center'>
                        <img src={service.getFilePreview(featuredImage)} alt={title}
                        className='rounded-xl mx-auto mt-2 w-[158px] h-[140px]'
                        />
                    </div>
                    <div className='flex justify-center text-xl font-semibold mt-4'>{title}
                </div>
            </div>
    </Link>
    );
}

export { PostCard }