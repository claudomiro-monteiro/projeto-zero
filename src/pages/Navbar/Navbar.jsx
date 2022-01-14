import React, { useState } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { Burger } from '../../components/ButtonBurger/Burger'
import { DropdownFeminino } from '../../components/DropdownFemi/DropdownFeminino'
import { DropdownMasculino } from '../../components/DropdownMasc/DropdownMasculino'
import { Sidebar } from '../Sidebar/Sidebar'
import logo_loja from '../../assets/logo_loja.svg'
import { Li, Link, Nav, NavLogo, Ul } from './style'

export const Navbar = ({ sidebar, setSidebar, open, handleClick }) => {

    const scrollToTop = () => {
        scroll.scrollToTop();

    }

    const [dropdownFemi, setDropdownFemi] = useState(false)
    const [dropdownMasc, setDropdownMasc] = useState(false)

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdownFemi(false)
        } else {
            setDropdownFemi(true)
        }
    }

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdownFemi(false)
        } else {
            setDropdownFemi(false)
        }
    }

    const onMouseEnterMasc = () => {
        if (window.innerWidth < 960) {
            setDropdownMasc(false)
        } else {
            setDropdownMasc(true)
        }
    }

    const onMouseLeaveMasc = () => {
        if (window.innerWidth < 960) {
            setDropdownMasc(false)
        } else {
            setDropdownMasc(false)
        }
    }

    return (
        <>
            <Nav>
                <NavLogo>
                    <img src={logo_loja} alt='logo da empresa' onClick={scrollToTop}/>
                </NavLogo>
                <Sidebar  sidebar={sidebar} setSidebar={setSidebar} handleClick={handleClick}/>
                <Ul>
                    <Li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Link to="/">Feminino</Link>
                        {dropdownFemi && <DropdownFeminino />}
                    </Li>
                    <Li onMouseEnter={onMouseEnterMasc} onMouseLeave={onMouseLeaveMasc}>
                        <Link to="/">Masculino</Link>
                        {dropdownMasc && <DropdownMasculino />}
                    </Li>
                    <Li>
                        <Link activeClass="active"
                            to="quemsomos"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={-65}
                            duration={400}
                            delay={100}
                        >
                            Quem Somos
                        </Link>
                    </Li>
                    <Li>
                        <Link activeClass="active"
                            to="localizacao"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={-65}
                            duration={400}
                            delay={100}
                        >
                            Localização
                        </Link>
                    </Li>
                    <Li>
                        <Link activeClass="active"
                            to="contato"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={-65}
                            duration={400}
                            delay={100}
                        >
                            Contato
                        </Link>
                    </Li>
                </Ul>
                <Burger open={open} handleClick={handleClick}/>
            </Nav>
        </>
    )
}
