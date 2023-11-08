import Image from "next/image";
import { MdOutlineWeb } from "react-icons/md";
import HeroImage from "../assets/cesar.jpg"
import LinkedinIcon from "../assets/linkedin.svg"
import GitHubIcon from "../assets/github.svg"
import WhatsappIcon from "../assets/wsp.svg"


export default function Home() {
  return (
    <main className="px-7 mt-6 flex flex-col items-center">
      {/* // Greeting */}
      <div className="flex flex-col w-full">
        <span className="text-sm">Hola 👋, soy</span>
        <h1 className="text-3xl font-bold">César Guevara</h1>
      </div>
      {/* // Hero */}
      <div className="relative w-[275px] mt-5">
        <Image
          src={HeroImage}
          alt="César Guevara"
          className="rounded-tl-[84px] rounded-tr-xl rounded-bl-xl h-52 w-64 object-cover z-10 mx-auto"
        />
        <div className="w-24 h-6 bg-sky-400 absolute top-4 -left-0 -z-10"></div>
        <div className="w-24 h-6 bg-yellow-500 absolute top-14 -left-2 -z-10"></div>
        <div className="w-24 h-6 bg-black absolute bottom-6 -right-1 -z-10"></div>
      </div>
      {/* // Career */}
      <div className="flex justify-start w-full gap-1 text-base mt-[28px]">
        <h2 className="text-sky-400 font-bold">Frontend Developer</h2>
        <span className="text-yellow-500 font-bold">/</span>
        <h2 className="text-green-600 font-bold">Electronic Engineer</h2>
      </div>
      {/* // CallToAction */}
      <div className="mt-[10px]">
        <p className="text-sm text-left">
          Me especializo en crear soluciones, desarrollando apps para web y dispositivos móviles.
          <br />
          <br />
          Te invito a conocer mis proyectos.
        </p>
        <button className="text-sm bg-yellow-500 py-[12px] px-[7px] flex gap-2 justify-center items-center mt-[21px] w-[137px]">
          Proyectos
          <MdOutlineWeb size="24" color="#493E00" />
        </button>
      </div>
      {/* // Buttons */}
      <div className="flex justify-center w-full gap-10 mt-[44px] mb-10">
        <a href="https://www.linkedin.com/in/domakedev/"
          target="_blank"
        >
          <Image
            src={LinkedinIcon}
            alt="desc"
            width={34}
            height={34}
          />
        </a>
        <a href="https://github.com/domakedev" target="_blank"
        >
          <Image
            src={GitHubIcon}
            alt="desc"
            width={34}
            height={34}
          />
        </a>
        <a href="https://api.whatsapp.com/send?phone=51943047804&text=Hola%2C%20me%20gustaria%20contactar%20contigo%20sobre%3A%20" target="_blank"
        >
          <Image
            src={WhatsappIcon}
            alt="desc"
            width={34}
            height={34}
          />
        </a>
      </div>
    </main>
  )
}
