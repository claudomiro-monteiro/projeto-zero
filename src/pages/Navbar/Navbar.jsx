import React, { useState } from 'react'
import { Burger } from '../../components/ButtonBurger/Burger'
import { DropdownFeminino } from '../../components/DropdownFemi/DropdownFeminino'
import { DropdownMasculino } from '../../components/DropdownMasc/DropdownMasculino'
import { Sidebar } from '../Sidebar/Sidebar'
// import './style'
import { Li, Link, Nav, NavLogo, Ul } from './style'

export const Navbar = ({ open, handleClick }) => {

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
                    Navbar
                </NavLogo>
                <Sidebar  />
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
                            offset={-60}
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
                            offset={-60}
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
                            offset={-60}
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
