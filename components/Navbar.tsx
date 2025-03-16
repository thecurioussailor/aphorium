"use client"
import { useState } from "react"
import { signOut, useSession } from "next-auth/react"
import Link from "next/link"
import Image from "next/image"
import LoginDialog from "./LoginDialog"

const Navbar = () => {
    const { data: session, status } = useSession()
    const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false)
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
    
    const handleSignOut = () => {
        signOut({ callbackUrl: '/' })
    }

    return (
        <nav className="h-20 absolute flex items-center w-full px-24 text-white z-50">
            <div className="flex justify-between items-center w-full">
                <div>
                    <Link href="/">
                        <h1 className="text-2xl font-bold cursor-pointer">Aphorium</h1>
                    </Link>
                </div>
                <ul className="flex gap-6 items-center">
                    <li className="cursor-pointer hover:text-gray-300 transition-colors">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="cursor-pointer hover:text-gray-300 transition-colors">
                        <Link href="/blog">Blog</Link>
                    </li>
                    <li className="cursor-pointer hover:text-gray-300 transition-colors">
                        <Link href="/contact">Contact</Link>
                    </li>
                    <li className="cursor-pointer hover:text-gray-300 transition-colors">
                        <Link href="/premium">Premium</Link>
                    </li>
                    <li className="cursor-pointer hover:text-gray-300 transition-colors">
                        <Link href="/subscribe">Subscribe</Link>
                    </li>
                    {status === "loading" ? (
                        <li className="h-8 w-8 rounded-full bg-gray-700 animate-pulse"></li>
                    ) : session ? (
                        <li className="relative">
                            <button 
                                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                                className="flex items-center gap-2"
                            >
                                <div className="h-8 w-8 rounded-full overflow-hidden">
                                    <Image 
                                        src={session.user.image || "/default-avatar.svg"} 
                                        alt={session.user.name || "User"} 
                                        width={32} 
                                        height={32}
                                        className="object-cover"
                                    />
                                </div>
                            </button>
                            
                            {isProfileMenuOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-[#1c1c1c] border border-zinc-800 rounded-md shadow-lg py-1 z-50">
                                    <div className="px-4 py-2 border-b border-zinc-800">
                                        <p className="text-sm font-medium">{session.user.name}</p>
                                        <p className="text-xs text-gray-400">{session.user.email}</p>
                                    </div>
                                    <Link href="/profile" className="block px-4 py-2 text-sm hover:bg-[#2c2c2c]">
                                        Profile
                                    </Link>
                                    <Link href="/dashboard" className="block px-4 py-2 text-sm hover:bg-[#2c2c2c]">
                                        Dashboard
                                    </Link>
                                    <button 
                                        onClick={handleSignOut}
                                        className="block w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-[#2c2c2c]"
                                    >
                                        Sign out
                                    </button>
                                </div>
                            )}
                        </li>
                    ) : (
                        <li>
                            <button 
                                onClick={() => setIsLoginDialogOpen(true)}
                                className="cursor-pointer hover:text-gray-300 transition-colors"
                            >
                                Login
                            </button>
                        </li>
                    )}
                </ul>
            </div>
            {isLoginDialogOpen && <LoginDialog onClose={() => setIsLoginDialogOpen(false)} />}
        </nav>
    )
}

export default Navbar