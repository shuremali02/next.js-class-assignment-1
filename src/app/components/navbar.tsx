"use client";
import Link from "next/link"
import { useState } from "react"
import { FiX, FiMenu } from "react-icons/fi"

export default function Navbar() {
  const [Open,setOpen]=useState(false)
    return (
      <div className="bg-amber-700 flex justify-between items-center p-6">
      <h1 className="text-white font-bold">Shurem</h1>

      {/* Desktop Menu - Visible on Medium and Larger Screens */}
      <ul className="text-amber-100 hidden md:flex justify-center flex-grow space-x-8 font-semibold">
        <li><Link className="hover:underline" href="./">Home</Link></li>
        <li><Link className="hover:underline" href="./about">About</Link></li>
        <li><Link className="hover:underline" href="./contact">Contact</Link></li>
        <li><Link className="hover:underline" href="./services">Services</Link></li>
      </ul>

      {/* Mobile Menu Button aligned to the right */}
      <div className="md:hidden flex-1 flex justify-end">
        <button
          className="bg-amber-300"
        onClick={()=>setOpen(!Open)}
          aria-label="Toggle Menu"
        >
          {Open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation - Visible only when open */}
      {Open && (
        <nav className="absolute top-16 left-0 right-0 bg-amber-700 text-amber-300 text-center md:hidden">
          <ul className="flex flex-col gap-4 py-4">
            <li><Link className="hover:underline" href="./">Home</Link></li>
            <li><Link className="hover:underline" href="./about">About</Link></li>
            <li><Link className="hover:underline" href="./contact">Contact</Link></li>
            <li><Link className="hover:underline" href="./services">Services</Link></li>
          </ul>
        </nav>
      )}
    </div>
  )
} 