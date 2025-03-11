"use client"
import { IoSearchOutline } from "react-icons/io5";
import BlogCard from "./BlogCard";
import { motion } from "motion/react";
import { useRef } from "react";

const Hero = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const cards = [1, 2, 3, 4, 5, 6]; // Placeholder for multiple cards

  return (
    <div className="relative w-full text-[#dedede] h-[200vh] opacity-100">
        <div className="absolute z-50 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        <div className="pt-48 flex flex-col gap-14 items-center justify-center">
            <div className="flex justify-center flex-col gap-2">
                <h1 className="text-7xl font-bold text-center">From Local Ideas</h1>
                <h1 className="text-7xl font-bold">to Worldwide Influence.</h1>
            </div>
            <div className="flex flex-col gap-6">
                <div className="border border-zinc-800 bg-[#1c1c1c] flex items-center py-3 px-6 rounded-sm">
                    <input
                        placeholder="Search Blogs..." 
                        className="w-[32rem] bg-transparent outline-none"
                    />
                    <IoSearchOutline />
                </div>
                <div className="flex gap-4 justify-center">
                    <p>Top Suggestion:</p>
                    <ul className="flex gap-4">
                        <li>All</li>
                        <li>React</li>
                        <li>Framer Motion</li>
                        <li>AI</li>
                        <li>Blockchain</li>
                    </ul>
                </div>
            </div>
        </div>
        {/*Blog Carousel */}
        <div className="pt-32 px-24">
            <motion.div 
                ref={carouselRef}
                className="flex gap-10 cursor-grab overflow-hidden"
                drag="x"
                dragConstraints={carouselRef}
                whileTap={{ cursor: "grabbing" }}
                initial={{ x: 0 }}
                animate={{ x: 0 }}
            >
                {cards.map((_, index) => (
                    <motion.div
                        key={index}
                        className="min-w-max"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    >
                        <BlogCard />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </div>
  )
}

export default Hero