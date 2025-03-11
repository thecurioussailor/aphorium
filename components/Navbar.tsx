const Navbar = () => {
  return (
    <nav className="fixed h-20 flex items-center w-full px-24 text-white">
        <div className="flex justify-between items-center w-full">
            <div>
                <h1 className="text-2xl font-bold">Aphorium</h1>
            </div>
            <ul className="flex gap-6">
                <li>Home</li>
                <li>Blog</li>
                <li>Contact</li>
                <li>Premium</li>
                <li>Subscribe</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar