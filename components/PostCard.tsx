"use client"
import postImage from "@/public/blog.png";
import Image from "next/image";

const PostCard = () => {
    return (
        <div className='overflow-hidden'>
            <div className='relative w-full aspect-[9/8] rounded-md overflow-clip'>
                <Image 
                    src={postImage} 
                    alt="post-1"
                    className="object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                />
            </div>
            <div className="py-4">
                <div className="flex items-center gap-4 text-sm">
                    <div className="bg-[#1c1c1c] px-3 py-1 rounded-full">Social Media</div>
                    <div>July 12, 2024</div>
                </div>
                <div className="mt-4">
                    <h1 className="text-2xl font-semibold text-left w-4/5">How to use social media to grow your business</h1>
                </div>
                <button className="mt-4 bg-[#1c1c1c] border border-zinc-800 text-[#dedede] px-6 py-2 rounded-md">Read Article</button>
            </div>
        </div>
    )
}

export default PostCard