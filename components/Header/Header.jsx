'use client'
import React from 'react'
import "./header.css"
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/assets/logo.svg'
import { usePathname } from 'next/navigation'
import NavLi from '../Nav/NavLi'

const Header = () => {
  const pathName = usePathname()

  const routes = [
    {
      linkTo: "/",
      name: "Presentación"
    },
    {
      linkTo: "/tecnologias",
      name: "Tecnologías"
    }
  ]

  console.log('🚀 ~ file: Header.jsx:10 ~ pathName:', pathName)
  return (
    <div className='cabecera'>
      <Image
        src={Logo}
        width={376}
        height={107}
        alt="Domakedev Logo"
      />
      {/* <nav>
        <ul>
          <li className={pathName === "/" ? "active" : null}><Link href="/">Presentación</Link></li>
          <li><Link href="#">Tecnología</Link></li>
          <li><Link href="#">Proyectos</Link></li>
        </ul>
      </nav> */}
      <nav>
        <ul>
          {routes.map((route, index) => (
            <NavLi
              pathName={pathName}
              linkTo={route.linkTo}
              name={route.name}
              key={index}>
            </NavLi>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Header
