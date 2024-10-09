import React from 'react';
import Image from 'next/image';
import Style from "../../css.module/common.module.css"

export default function UiUxDesignPage() {
    return (
        <div className={Style.container}>
            <h1 className={Style.title}>UI/UX Design</h1>

            <div className={Style.contentgrid}>
                {/* Text Section */}
                <div>
                    <p className={Style.text}>
                       <b className='text-2xl'>UI/UX design</b>  focuses on the users interaction with a product or service. UI (User Interface) design is all 
                        about designing the visual elements, ensuring the interface is easy to use and visually appealing. On the 
                        other hand, UX (User Experience) design ensures that users have a seamless and intuitive journey while interacting 
                        with the product.
                    </p>
                    <p className={Style.textparagraph}>
                        The combination of UI and UX helps create a product that is not only visually engaging but also provides 
                        a positive experience for the user. Good UI/UX design can be the difference between a user staying on your site 
                        or leaving it.
                    </p>
                    <p className={Style.textparagraph}>
                        From wireframing and prototyping to testing and iterating, the process of UI/UX design is essential for 
                        building products that are user-centric and meet both business and customer needs effectively.
                    </p>
                </div>

                {/* Image Section */}
                <div>
                    <Image
                        src={"/product design.jpeg"} // Replace this with a relevant UI/UX image
                        alt="UI/UX Design Example"
                        height={400}
                        width={580}
                        className={Style.Image}
                    />
                </div>
            </div>
        </div>
    );
}
