import React from 'react'
import Link from 'next/link'
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import Style from "./contact.module.css"

export default function ContactUsPage() {
  return (
    <div className={Style.container}>
        <h1 className={Style.title}>Contact Me  </h1>
        <div className={Style.links}>

            <Link className={Style.linkitem} href={"https://www.linkedin.com/in/syed-shurem-ali-5a55852a0/"}><FaLinkedin/>LinkedIn</Link>
            <Link className={Style.linkitem}  href={"https://github.com/shuremali02"}><FaGithub/>Github</Link>
            <Link className={Style.linkitem}  href={"mailto:shuremsyed41@gmail.com"}><MdEmail/>Email</Link>
        </div>
    </div>
  )
}
