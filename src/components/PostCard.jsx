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
        <div className='flex-col bg-gray-100 rounded-xl w-56 h-56'>
            <div className='flex justify-center'>
                <img src={service.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl mx-auto mt-2' 
                width={"160px"}
                height={"160px"}
                />
            </div>
            <div className='flex justify-center text-3xl font-semibold mt-4'>{title}
            </div>
        </div>
    </Link>
    );
}

export { PostCard }