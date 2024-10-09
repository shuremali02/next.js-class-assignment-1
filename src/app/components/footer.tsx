import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-amber-700 py-8 text-text2">
   

      <div className='max-w-7xl mx-auto px-4 lg:px-8 space-y-6'>
     
        <div className="text-amber-100 text-md grid grid-cols-1 md:grid-cols-3 lg:flex lg:justify-center lg:space-x-6">

     
             <Link href="/" className="hover:scale-95 text-center">
            Home
          </Link>
          <Link href="/about" className="hover:scale-95 text-center">
            About
          </Link>
          <Link href="/services" className="hover:scale-95 text-center">
            Service
          </Link>
          <Link href="/contact" className="hover:scale-95 text-center">
            Contact
          </Link>
        </div>

        <div className="flex justify-center">
          {/* Centered profile image */}

          <Image
            src="/dp.png"            // Path to the image
            alt="Footer Image"       // Alt text for accessibility
            width={80}               // Adjusted width for better visibility on larger screens
            height={80}              
            className="rounded-full h-auto"
          />
        </div>
        
        <div className="text-amber-100 text-md grid grid-cols-1 md:grid-cols-3 lg:flex lg:justify-center lg:space-x-6">
         <  div className='flex flex-col space-y-3'>
            <h1 className='text-xl font-semibold text-center '>My Work </h1>
            <p className='flex space-x-4'>
             <Link href="https://blogpost101.netlify.app" className="hover:scale-95 text-center">
           Blog Post
          </Link>
          <Link href="https://travelblog-assignment.netlify.app" className="hover:scale-95 text-center">
            Traveling Web
          </Link>
          {/* <Link href="/services" className="hover:scale-95 text-center">

            
          </Link> */}
          <Link href="https://resume-builder-milestone-5.netlify.app" className="hover:scale-95 text-center">
            Resume Generator
          </Link>
          </p>
          </div>
            </div>
        <div className="flex justify-center space-x-6 text-2xl lg:text-3xl">
          {/* Social media icons container with spacing and responsive size */}

          <Link
            href="//linkedin.com/in/syed-shurem-ali-5a55852a0"
            aria-label="LinkedIn"
            className="text-blue-500 hover:text-amber-200"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://github.com/shuremali02"
            aria-label="GitHub"
            className="text-white hover:text-amber-200"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://www.facebook.com/syed.shuremali?mibextid=ZbWKwL" // Placeholder link
            aria-label="Facebook"
            className="text-blue-800 hover:text-amber-200"
          >
            <FaFacebook />
          </Link>
          <Link
            href="//linkedin.com/in/syed-shurem-ali-5a55852a0"
            aria-label="Instagram"
            className="text-pink-600 hover:text-amber-200"
          >
            <FaInstagram />
          </Link>
        </div>

        <div className="text-sm text-center text-amber-300 font-medium">
          {/* Copyright and rights reserved text */}

          All rights reserved. &copy; Copyright{" "}
          <Link href="/">
            Syed Shurem Ali
          </Link>{" "}
          2024
        </div>
      </div>
    </footer>
  );
}