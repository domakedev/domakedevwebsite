import Image from "next/image";
import { MdOutlineWeb } from "react-icons/md";
import HeroImage from "../assets/cesar.jpg"
import LinkedinIcon from "../assets/linkedin.svg"
import GitHubIcon from "../assets/github.svg"
import WhatsappIcon from "../assets/wsp.svg"
import "./page.css"
import Link from "next/link";

export default function Home() {

  return (
    <div className="px-7 flex flex-col items-center lg:grid lg:grid-rows-3 lg:grid-flow-col lg:gap-4 lg:max-w-6xl lg:h-[393px] lg:-mt-[100px]">


      {/* // Greeting */}
      <div className="mt-5 flex flex-col w-full lg:row-span-1 lg:self-end lg:mt-8">
        <span className="text-sm lg:text-xl">Hola 👋, soy</span>
        <h1 className="text-3xl font-bold lg:text-5xl">César Guevara</h1>
      </div>



      {/* // Hero */}
      <div className="relative w-[275px] lg:w-[545px] mt-5 lg:row-span-3 lg:order-3">
        <Image
          src={HeroImage}
          alt="César Guevara"
          className="rounded-tl-[84px] rounded-tr-xl rounded-bl-xl w-64 lg:w-[494px] h-52 lg:h-[402px] object-cover z-10 mx-auto"
        />
        <div className="w-24 lg:w-[192px] h-6 lg:h-[44px] bg-light-blue absolute top-4 lg:top-[20px] -left-0 -z-10"></div>
        <div className="w-24 lg:w-[192px] h-6 lg:h-[44px] bg-yellow absolute top-14 lg:top-[98px] -left-2 -z-10"></div>
        <div className="w-24 lg:w-[192px] h-6 lg:h-[44px] bg-black absolute bottom-6 lg:bottom-[44px] -right-1 -z-10"></div>
      </div>




      {/* // Career */}
      <div className="flex justify-center lg:justify-start w-full gap-1 text-base lg:text-2xl mt-[28px] lg:row-span-1">
        <h2 className="text-light-blue font-bold">Programador Frontend</h2>
        <span className="text-green font-bold">/</span>
        <span className="text-light-blue font-bold">/</span>
        <h2 className="text-green font-bold">Ingeniero Electrónico</h2>
      </div>




      {/* // CallToAction */}
      <div className="mt-[10px] lg:row-span-1">
        <p className="text-sm lg:text-xl text-left lg:max-w-[444px]">
          Me especializo en crear soluciones, desarrollando aplicaciones para web y dispositivos móviles.
          <br />
          <br />
          Te invito a conocer mis proyectos.
        </p>
        <Link href="/proyectos" className="text-sm bg-yellow py-[12px] px-[7px] flex gap-2 justify-center items-center mt-[21px] w-[137px] rounded-sm action-button">
          Proyectos
          <MdOutlineWeb size="24" className="text-black" />
        </Link>
      </div>





      {/* // Buttons */}
      <div className="flex justify-center w-full lg:w-fit gap-10 mt-[44px] mb-10 lg:absolute lg:left-0 lg:flex-col lg:pl-4">
        <a href="https://www.linkedin.com/in/domakedev/"
          target="_blank"
        >
          <Image
            src={LinkedinIcon}
            alt="desc"
            width={34}
            height={34}
            className="lg:w-[54px]"
          />
        </a>
        <a href="https://github.com/domakedev" target="_blank"
        >
          <Image
            src={GitHubIcon}
            alt="desc"
            width={34}
            height={34}
            className="lg:w-[54px]"
          />
        </a>
        <a href="https://api.whatsapp.com/send?phone=51943047804&text=Hola%2C%20me%20gustaria%20contactar%20contigo%20sobre%3A%20" target="_blank"
        >
          <Image
            src={WhatsappIcon}
            alt="desc"
            width={34}
            height={34}
            className="lg:w-[54px]"
          />
        </a>
      </div>
    </div>
  )
}
