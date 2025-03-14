"use client"
import { useState } from "react"
import LoginDialog from "./LoginDialog"

const Navbar = () => {
    const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false)
  return (
    <nav className="h-20 absolute flex items-center w-full px-24 text-white z-50">
        <div className="flex justify-between items-center w-full">
            <div>
                <h1 className="text-2xl font-bold">Aphorium</h1>
            </div>
            <ul className="flex gap-6">
                <li className="cursor-pointer hover:text-gray-300 transition-colors">Home</li>
                <li className="cursor-pointer hover:text-gray-300 transition-colors">Blog</li>
                <li className="cursor-pointer hover:text-gray-300 transition-colors">Contact</li>
                <li className="cursor-pointer hover:text-gray-300 transition-colors">Premium</li>
                <li className="cursor-pointer hover:text-gray-300 transition-colors">Subscribe</li>
                <li>
                  <button 
                    onClick={() => setIsLoginDialogOpen(true)}
                    className="cursor-pointer hover:text-gray-300 transition-colors"
                  >
                    Login
                  </button>
                 
                </li>
            </ul>
        </div>
        {isLoginDialogOpen && <LoginDialog />}
    </nav>
  )
}

export default Navbar