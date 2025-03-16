"use client";

import { useSession } from "next-auth/react";
import Navbar from "@/components/Navbar";

export default function DashboardPage() {
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
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="mt-2 text-gray-400">Welcome back, {session?.user.name}!</p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border border-zinc-800 bg-[#1c1c1c] p-6">
            <h2 className="text-xl font-semibold">Your Posts</h2>
            <p className="mt-2 text-gray-400">You haven&apos;t created any posts yet.</p>
            <button className="mt-4 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
              Create New Post
            </button>
          </div>

          <div className="rounded-lg border border-zinc-800 bg-[#1c1c1c] p-6">
            <h2 className="text-xl font-semibold">Analytics</h2>
            <p className="mt-2 text-gray-400">Track your post performance.</p>
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <span>Views</span>
                <span>0</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Likes</span>
                <span>0</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Comments</span>
                <span>0</span>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-zinc-800 bg-[#1c1c1c] p-6">
            <h2 className="text-xl font-semibold">Account</h2>
            <p className="mt-2 text-gray-400">Manage your account settings.</p>
            <button className="mt-4 rounded-md bg-zinc-700 px-4 py-2 text-white hover:bg-zinc-600">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 