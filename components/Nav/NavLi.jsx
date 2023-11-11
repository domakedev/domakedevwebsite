import Link from "next/link"
import "./navLi.css"

const NavLi = ({ pathName, linkTo, name }) => {
    return (

        <li className={`${pathName === linkTo ? "active" : null} lg:text-base`}>
            <Link href={linkTo}>{name}</Link>
        </li>

    )
}

export default NavLi
