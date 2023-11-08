'use client'
import React from 'react'
import "./header.css"
import Image from 'next/image'
import Logo from '@/assets/logo.svg'
import { usePathname } from 'next/navigation'
import NavLi from '../Nav/NavLi'
import { slide as Menu } from 'react-burger-menu'
import Link from 'next/link'
import { useState } from 'react'


const Header = () => {
  const [ openMenu, setOpenMenu ] = useState(false)
  const pathName = usePathname()

  const routes = [
    {
      linkTo: "/",
      name: "Presentación"
    },
    {
      linkTo: "/tecnologias",
      name: "Tecnologías"
    },
    {
      linkTo: "/proyectos",
      name: "Proyectos"
    }
  ]

  
  return (
    <header className='cabecera'>
      <Link
        href="/"
      >
        <Image
          src={Logo}
          width={376}
          height={107}
          alt="Domakedev Logo"
          className='logo'
          priority
        />
      </Link>
      <nav className="menu-small">
        <Menu
          right
          isOpen={openMenu}
          onOpen={() => setOpenMenu(true)}
          onClose={() => setOpenMenu(false)}
        >
          {routes.map((route, index) => (
            <Link
              id={route.name}
              className="menu-item"
              href={route.linkTo}
              key={index}
              onClick={() => setOpenMenu(false)}
            >
              {route.name}
            </Link>
          ))}
        </Menu>
      </nav>
      <nav className='menu-large'>
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
    </header>
  )
}

export default Header
