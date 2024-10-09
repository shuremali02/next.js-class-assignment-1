import React from 'react'
import Image from 'next/image'
import Style from "./about.module.css"

export default function AboutUsPage() {
  return (
    <div className={Style.container} > 
        <h1 className={Style.title}>About Me</h1>
        <div className= {Style.imagecontainer}>
            <Image src={"/dp.png"}
            alt=''
            height={20}
            width={200}
            className={Style.profileimage}
            />
             
        </div>
    <p className={Style.description}>

Welcome to our blog, where we embrace a passion for continuous learning and development. At the heart of this space is Syed Shurem Ali, a dedicated front-end developer with over 2.5 years of experience creating engaging, user-friendly interfaces. With a foundation in technologies like Next.js, React, TypeScript, and Tailwind CSS, Shurem brings a love for problem-solving and a keen eye for design, inspired by color theory principles.
        </p>
    </div>
  )
}
