// import { Link } from 'react-router-dom'
import { BsMoonStars } from 'react-icons/bs'
import { FaSun } from 'react-icons/fa'
import { NavContainer } from '../styled-components/NavBar.styled'
import { withTheme } from "styled-components"
import { useState } from 'react'


const NavBar = (props) => {

    const handlerTheme = () => { (props.theme === "dark") ? props.setTheme('light') : props.setTheme('dark') }

    const boton = props.theme === 'light' ? <BsMoonStars/> : <FaSun/>;

    const [nav, setNav] = useState(false)

    const handlerNavbar = () => { setNav(!nav) }

    return (
        <NavContainer>
            <div className='toggler' onClick={handlerNavbar}>
                <div className={ nav === true ? 'uno' : 'none'}></div>
                <div className={ nav === true ? 'dos' : 'none'}></div>
                <div className={ nav === true ? 'tres' : 'none'}></div>
            </div>
            <ul className={nav === true ? 'list active' : 'list'}>
                <li>
                    <a href="#WORKS">Works</a>
                </li>
                <li>
                    <a href="#INFO">About Me</a>
                </li>
                <li>
                    <a href="#CONTACT">Contact</a>
                </li>
            </ul>
            <div className='button-theme' onClick={handlerTheme}>
                {boton}
            </div>
        </NavContainer>
    )
}

export default withTheme(NavBar)