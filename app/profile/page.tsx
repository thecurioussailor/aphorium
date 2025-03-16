"use client";

import { useSession } from "next-auth/react";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function ProfilePage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#0d0d0d] text-white">
        <div className="h-12 w-12 animate-spin rounded-full border-t-2 border-white"></div>
        <p className="mt-4">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">
      <Navbar />
      <div className="container mx-auto px-4 pt-32">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-lg border border-zinc-800 bg-[#1c1c1c] p-8">
            <div className="flex flex-col items-center md:flex-row md:items-start">
              <div className="h-32 w-32 overflow-hidden rounded-full">
                <Image
                  src={session?.user.image || "/default-avatar.svg"}
                  alt={session?.user.name || "User"}
                  width={128}
                  height={128}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-6 text-center md:ml-8 md:mt-0 md:text-left">
                <h1 className="text-3xl font-bold">{session?.user.name}</h1>
                <p className="mt-1 text-gray-400">{session?.user.email}</p>
                <div className="mt-4">
                  <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                    Edit Profile
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-zinc-800 pt-8">
              <h2 className="text-xl font-semibold">About</h2>
              <p className="mt-2 text-gray-400">No bio yet.</p>
            </div>

            <div className="mt-8 border-t border-zinc-800 pt-8">
              <h2 className="text-xl font-semibold">Recent Posts</h2>
              <p className="mt-2 text-gray-400">You haven't created any posts yet.</p>
            </div>

            <div className="mt-8 border-t border-zinc-800 pt-8">
              <h2 className="text-xl font-semibold">Account Settings</h2>
              <div className="mt-4 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400">Email</label>
                  <p className="mt-1">{session?.user.email}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400">Account Type</label>
                  <p className="mt-1 capitalize">{session?.user.role || "User"}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400">Member Since</label>
                  <p className="mt-1">Recently</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 