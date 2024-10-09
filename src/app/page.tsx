import Link from "next/link";
import Image from "next/image";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import Style from "./home.module.css"

export default function Home() {
  return (
    <div className={Style.container}>
      
      <div className={Style.text}>
        <h1 className={Style.title}>Hello, I&#39;m</h1>
        <p className={Style.subtitle}>Frontend Developer</p>
        <p className={Style .description}>At the heart of this space is Syed Shurem Ali, a dedicated front-end developer with over 2.5 years of experience creating engaging, user-friendly interfaces.</p>
        <p>
          <Link className={Style.portfoliolink } 
            href="https://milestone-02-personal-portfolio.netlify.app/">
            Portfolio <FaExternalLinkSquareAlt/>
          </Link>
        </p>
      </div>

<div className={Style.imagecontainer}>
        <Image
          src={"https://i.pinimg.com/236x/8a/06/9c/8a069ce1a66af96a9c401762cc1f1c8f.jpg"}
          alt=""
          height={300}
          width={400}
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
