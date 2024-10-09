import React from 'react'
import Link from 'next/link';
import ServiceCards, { Cardprop } from '../components/servicecard'
import { AiOutlineAntDesign } from 'react-icons/ai';
import { SiApachedruid, SiOpenapiinitiative } from 'react-icons/si';
import { MdProductionQuantityLimits } from 'react-icons/md';
import Style from "../services/service.module.css"

export default function ServicePage () {
    const services: Cardprop[] = [
      {
        icon: <AiOutlineAntDesign size={28} />,
        title: "Web-Design",
        description: "Creating responsive and visually appealing web designs.",
        link: "/services/webdesign" 
      },
      {
        icon: <SiApachedruid size={28} />,
        title: "UI/UX-Design",
        description: "Designing user-friendly and intuitive interfaces.",
        link: "/services/uiux" 
      },
      {
        icon: <MdProductionQuantityLimits size={28} />,
        title: "Product-Design",
        description: "Innovative product designs for modern applications.",
        link: "/services/product" 
      },
      {
        icon: <SiOpenapiinitiative size={28}/>,
        title: "Logo-Design",
        description: "Crafting unique and memorable logos for brands.",
        link: "/services/logo" 
      }
    ];

    return (
      <div className={Style.container}>
        <h1 className={Style.title}>Services</h1> 

        <div className={Style.servicegrid}>
          {services.map((service, index) => (
            <Link key={index} href={service.link}>
              <>
                <ServiceCards {...service} />
              </>
            </Link>
          ))}
        </div>
      </div>
    );
}