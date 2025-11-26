import Image from "next/image";
import Link from "next/link";
import { MdOutlineWeb } from "react-icons/md";
import HeroImage from "../assets/cesar.jpg";
import LinkedinIcon from "../assets/linkedin.svg";
import GitHubIcon from "../assets/github.svg";
import WhatsappIcon from "../assets/wsp.svg";
import TechsPage from "./tecnologias/page";
import ProyectsPage from "./proyectos/page";
import "./page.css";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white text-black overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12 lg:py-24 grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
        
        {/* Text Content */}
        <div className="flex flex-col items-start z-10 order-2 md:order-1">
          <span className="text-lg lg:text-2xl font-medium text-gray-600 mb-2 animate-fade-in-up">
            Hola 👋, soy
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 tracking-tight animate-fade-in-up delay-100">
            César Guevara
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-light-blue to-green mb-6 animate-fade-in-up delay-200">
            Full Stack Developer
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-lg mb-8 leading-relaxed animate-fade-in-up delay-300">
            Creo aplicaciones web modernas, escalables y de alto rendimiento. 
            Transformo ideas en realidad digital.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-10 animate-fade-in-up delay-400 justify-center md:justify-start w-full">
             <Link
              href="/proyectos"
              className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 w-full justify-center md:w-fit"
            >
              Ver Proyectos <MdOutlineWeb size={24} />
            </Link>
             <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/cesarguevaracabrera/"
                target="_blank"
                className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-all hover:-translate-y-1"
              >
                <Image src={LinkedinIcon} alt="LinkedIn" width={24} height={24} />
              </a>
              <a
                href="https://github.com/domakedev"
                target="_blank"
                className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-all hover:-translate-y-1"
              >
                <Image src={GitHubIcon} alt="GitHub" width={24} height={24} />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=51943047804&text=Hola%2C%20me%20gustaria%20contactar%20contigo%20sobre%3A%20"
                target="_blank"
                className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-all hover:-translate-y-1"
              >
                <Image src={WhatsappIcon} alt="WhatsApp" width={24} height={24} />
              </a>
             </div>
          </div>
        </div>

        {/* Image Content */}
        <div className="relative flex justify-center items-center order-1 md:order-2 animate-fade-in-left">
            {/* Decorative Blobs */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-yellow/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute bottom-0 left-10 w-72 h-72 bg-light-blue/20 rounded-full blur-3xl -z-10"></div>
            
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px]">
                 <Image
                    src={HeroImage}
                    alt="César Guevara"
                    fill
                    className="object-cover rounded-[2rem] shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500"
                    priority
                  />
            </div>
        </div>
      </section>

      {/* Original Layout for Projects and Techs */}
      <div className="flex flex-wrap gap-2 justify-center mx-6 mt-10">
        <div className="">
          <ProyectsPage />
        </div>
        <div className="">
          <TechsPage />
        </div>
      </div>
    </div>
  );
}
