import React from 'react';
import Image from 'next/image';
import Style from "../../css.module/common.module.css"
export default function ProductDesignPage() {
    return (
        <div className={Style.container}>
            <h1 className={Style.title}>Product Design</h1>

            <div className={Style.contentgrid}>
                {/* Text Section */}
                <div>
                    <p className={Style.text}>
                       <b className='text-2xl'> Product design </b>is about creating functional, visually appealing products that solve real-world problems. 
                        It involves understanding user needs, the market, and applying creative and technical skills to build 
                        products that resonate with users.
                    </p>
                    <p className={Style.textparagraph}>
                        A well-designed product not only satisfies its functional purpose but also enhances the user experience. 
                        It can be the difference between a successful product and one that is quickly forgotten.
                    </p>
                    <p className={Style.textparagraph}>
                        From ideation to prototype and final execution, product design plays a vital role in shaping how 
                        people interact with and perceive products, ensuring they meet both practical needs and aesthetic desires.
                    </p>
                </div>

                {/* Image Section */}
                <div>
                    <Image
                        src={"/product design.jpeg"} // Replace this with your actual image path
                        alt="Product Design Example"
                        height={400}
                        width={600}
                        className={Style.image}
                    />
                </div>
            </div>
        </div>
    );
}
