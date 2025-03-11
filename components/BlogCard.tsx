"use client"
import blogImage from "@/public/blog.png";
import Image from "next/image";
import { motion } from "framer-motion";

const BlogCard = () => {
  return (
    <div className="relative h-[500px] w-[418px] rounded-sm overflow-clip">
        <motion.div 
            className="absolute inset-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
        >
            <Image
                src={blogImage}
                alt="Blog Card"
                className="w-full h-full object-cover"
            />
        </motion.div>
        <div className="absolute inset-0 p-4">
            <div className="flex flex-col items-baseline justify-between h-full gap-2">
                <button className="bg-black/80 backdrop-blur-sm px-4 py-1 rounded-full text-white">Tags</button>
                <div className="text-white flex flex-col gap-2">
                    <h1 className="text-2xl font-bold">Unveiling the Secrets Testing and Optimizing UI/UX</h1>
                    <div className="flex items-center gap-3">
                        <p>By Liam Johnson</p>
                        <div className="w-1 h-1 rounded-full bg-white"></div>
                        <p>Feb 25, 2024</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogCard