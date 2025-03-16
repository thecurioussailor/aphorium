import { IoMdArrowForward } from "react-icons/io";
import PostCard from "./PostCard";
const Recent = () => {
  return (
    <section className="flex flex-col text-[#dedede] gap-10 h-screen px-24">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Recent Post</h1>
        <button className="flex items-center gap-2 px-4 py-2 rounded-2xl hover:bg-[#1c1c1c] text-[#dedede] transition-all duration-300 cursor-pointer" style={{ cursor: 'pointer' }}><span>Browse more posts</span> <IoMdArrowForward size={20} /></button>
      </div>
      <div className="grid grid-cols-3 gap-10">
        <PostCard/>
        <PostCard/>
        <PostCard/>
      </div>
    </section>
  )
}

export default Recent