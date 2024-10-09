import React from 'react';
import Image from 'next/image';
import Style from "../../css.module/common.module.css"

export default function WebDesignPage() {
  return (
    <div className={Style.container}>
      <h1 className={Style.title}>Web Design</h1>

      <div className={Style.contentgrid}>
        
        {/* Text Section */}
        <div>
          <p className={Style.text}>
           <b className='text-2xl'> Web design </b>is a crucial part of any website&#39;s success. It encompasses a variety of skills and disciplines
            that help create the visual layout, functionality, and usability of websites. From selecting the perfect
            color schemes to designing seamless user interfaces, every aspect of web design impacts user experience.
          </p>
          <p className={Style.textparagraph}>
            A well-crafted web design not only looks visually appealing but also ensures that users can easily navigate
            and interact with the content. A balance between creativity and functionality is key to building effective
            websites.
          </p>
        </div>

        {/* Image Section */}
        <div>
          <Image
            src="/web design.jpeg" // Example image from Pinterest
            alt="Web Design Concept"
            height={400}
            width={600}
            className={Style.Image}
          />
        </div>

      </div>
    </div>
  );
}
