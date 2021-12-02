import React, { useState } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { FaHome } from "react-icons/fa";

import { DropdownFeminino } from '../../components/DropdownFemi/DropdownFeminino'
import { DropdownMasculino } from '../../components/DropdownMasc/DropdownMasculino'
import { Avatar, Background, Li, Link, SidebarNav, Ul } from './style'

export const Sidebar = () => {

    const scrollToTop = () => {
        scroll.scrollToTop();

    }

    const [dropdowmFemi, setDropdowmFemi] = useState(false)
    const handleClickFemi = () => {
        setDropdowmFemi(!dropdowmFemi)
        setDropdowmMasc(false)
    }

    const [dropdowmMasc, setDropdowmMasc] = useState(false)
    const handleClickMasc = () => {
        setDropdowmMasc(!dropdowmMasc)
        setDropdowmFemi(false)
    }

    return (
        <>
            <Background>
                <SidebarNav>
                    <Avatar>
                        Imagem
                    </Avatar>
                    <Ul>
                        <Li>
                            <Link activeClass="active"
                            to="/"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={-60}
                            duration={400}
                            delay={100}
                            onClick={scrollToTop}
                            >
                                <FaHome />
                                Inicio
                            </Link>
                        </Li>
                        <Li>
                            <Link to="/" onClick={handleClickFemi}>
                                Pijama Feminino
                            </Link>
                            {dropdowmFemi ? (<DropdownFeminino />) : null}
                        </Li>
                        <Li>
                            <Link to="/" onClick={handleClickMasc}>
                                Pijama Masculino
                            </Link>
                            {dropdowmMasc ? (<DropdownMasculino />) : null}
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
                </SidebarNav>
            </Background>
        </>
    )
}
