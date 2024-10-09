import React from 'react';
import Image from 'next/image';
import Style from "../../css.module/common.module.css"

export default function LogoDesignPage() {
    return (
        <div className={Style.container}>
            <h1 className={Style.title}>Logo Design</h1>

            <div className={Style.contentgrid}>
                {/* Text Section */}
                <div>
                    <p className={Style.text}>
                       <b className='text-2xl'>Logo design </b> is a crucial part of a brand&#39;s identity. A logo represents the brand visually, making
                        a lasting impression on potential customers. A well-designed logo is more than just a symbol or
                        text—it communicates the values and personality of the brand.
                    </p>
                    <p className={Style.textparagraph}>
                        In today&#39;s competitive market, having a distinct logo helps businesses stand out and build brand
                        recognition. It creates an emotional connection with the audience, setting the tone for all
                        future interactions with the brand.
                    </p>
                </div>

                {/* Image Section */}
                <div>
                    <Image
                        src={"/logo design.jpeg"} // Replace this with your actual image path
                        alt="Logo Design Example"
                        height={400}
                        width={580}
                        className={Style.image}
                    />
                </div>
            </div>
        </div>
    );
}
