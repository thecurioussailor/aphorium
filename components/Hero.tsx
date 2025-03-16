"use client"
import { IoSearchOutline } from "react-icons/io5";
import BlogCard from "./BlogCard";
import { motion } from "motion/react";

const Hero = () => {

  const cards = [1 ,2, 3, 4]; 

  return (
    <div className="relative w-full text-[#dedede] h-auto z-0">
        <div className="absolute z-0 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        <div className="pt-48 flex flex-col gap-14 items-center justify-center z-10">
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
        <div className="pt-32 pb-36">
            <div className=" relative flex overflow-hidden">
                <div className="z-50 w-full h-full absolute left-0 top-0 bg-radial-[at_50%_25%] to-zinc-900 to-100%"></div>
                <motion.div 
                    className="flex flex-shrink-0"
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{
                        duration: 30,
                        ease: "linear",
                        repeat: Infinity
                    }}
                >
                    {cards.map((_, index) => (
                        <div key={index} className="pr-10">
                            <BlogCard />
                        </div>
                    ))}
                </motion.div>
                <motion.div 
                    className="flex flex-shrink-0"
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{
                        duration: 30,
                        ease: "linear",
                        repeat: Infinity
                    }}
                >
                    {cards.map((_, index) => (
                        <div key={index} className="pr-10">
                            <BlogCard />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Hero