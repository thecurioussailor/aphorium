"use client"
import { motion } from "framer-motion"
import postImage from "@/public/blog.png";
import Image from "next/image";

const Subscribe = () => {
    const cards = [1, 2, 3, 4, 5, 6]; 
  return (
    <section className="flex text-[#dedede] h-screen px-24">
        <div className="flex flex-col justify-center w-2/5">
            <div>
                <h1 className="text-5xl font-bold py-5">Sign up for access to exclusive articles</h1>
                <p className="text-lg">Escape from the repetitive cycle to explore diverse perspectives, specialized subjects, and emerging trends that redefine your perception of the world. Reveal undiscovered treasures and expand your outlook with unique content unavailable elsewhere.</p>
                <button className="bg-[#1c1c1c] border mt-10 border-zinc-800 text-[#dedede] w-full px-6 py-2 rounded-md">Subscribe now!</button>
            </div>
            <div className="pt-10">
                <h1 className="text-2xl font-bold">What&apos;s include in:</h1>
                <div className="flex flex-col gap-2 mt-10">
                    <p> • 100+ articles</p>
                    <p> • Premium content</p>
                    <p> • Early access</p>
                </div>
            </div>
        </div>
        <div className="relative w-3/5 flex gap-20 px-20">
            {/* Column going up */}
            <div className="flex-1 relative h-[100vh] overflow-hidden">
                <motion.div 
                    className="flex flex-col gap-10 absolute left-0 right-0"
                    initial={{ y: 0 }}
                    animate={{ y: "-100%" }}
                    transition={{
                        duration: 50,
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "loop"
                    }}
                >
                    {cards.map((_, index) => (
                        <div key={index} className="mb-10">
                            <VerticalCard />
                        </div>
                    ))}
                </motion.div>
                <motion.div 
                    className="flex flex-col gap-10 absolute left-0 right-0"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{
                        duration: 50,
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "loop"
                    }}
                >
                    {cards.map((_, index) => (
                        <div key={`second-${index}`} className="mb-10">
                            <VerticalCard />
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Column going down */}
            <div className="flex-1 relative h-[100vh] overflow-hidden">
                <motion.div 
                    className="flex flex-col gap-10 absolute left-0 right-0"
                    initial={{ y: 0 }}
                    animate={{ y: "100%" }}
                    transition={{
                        duration: 50,
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "loop"
                    }}
                >
                    {cards.map((_, index) => (
                        <div key={index} className="mb-10">
                            <VerticalCard />
                        </div>
                    ))}
                </motion.div>
                <motion.div 
                    className="flex flex-col gap-10 absolute left-0 right-0"
                    initial={{ y: "-100%" }}
                    animate={{ y: 0 }}
                    transition={{
                        duration: 50,
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "loop"
                    }}
                >
                    {cards.map((_, index) => (
                        <div key={`second-${index}`} className="mb-10">
                            <VerticalCard />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Subscribe

const VerticalCard = () => {
    return (
        <div className='overflow-hidden'>
            <div className='relative w-full aspect-[8/9] rounded-md overflow-clip'>
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
                <h1 className="text-2xl font-semibold text-left w-4/5">How to use social media to grow your business</h1>
            </div>
        </div>
    )
}