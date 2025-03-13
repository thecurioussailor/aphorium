const Footer = () => {
  return (
    <section className="bg-[#0d0d0d] text-[#dedede] flex flex-col justify-between h-screen relative px-24">
      <div className="absolute z-50 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      <div className="flex flex-col gap-10 justify-center items-center pt-32 pb-20">
          <div className="flex flex-col gap-2 items-center">
            <h1 className="text-5xl font-bold">Get Notifications</h1>
            <h1 className="text-5xl font-bold">For Each Fresh Post</h1>
          </div>
          <div className="flex gap-4 w-xl">
            <input 
              type="text"
              placeholder="Your Email Address" 
              className="bg-transparent border-2 border-white/10 rounded-md px-4 py-2 w-full"
            />
            <button className="bg-white text-black px-4 py-2 rounded-md">Subscribe</button>
          </div>
      </div>
      <div className="flex gap-20 justify-between items-center border-t border-white/10 py-10">
        <div className="flex flex-col gap-2 w-1/3 px-10">
          <h1 className="text-2xl font-bold">Aphorium</h1>
          <p>Aphorium is a blog about the latest trends in technology and business.</p>
        </div>
        <div className="flex flex-row justify-evenly gap-20 w-2/3">
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Links</h1>
            <ul>
              <li>Home</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Socials</h1>
            <ul>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Contact</h1>
            <ul>
              <li>Email</li>
              <li>Phone</li>
              <li>Address</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center border-t border-white/10 py-10 bg-[#0d0d0d]">
        <p>© 2025 Aphorium. All rights reserved.</p>
      </div>
    </section>
  )
}

export default Footer