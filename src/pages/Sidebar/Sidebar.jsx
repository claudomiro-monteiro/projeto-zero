import React, { useState } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { FaFemale, FaHome, FaMailBulk, FaMale, FaMapMarkerAlt } from "react-icons/fa";
import { RiUserSharedFill } from "react-icons/ri";

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
                                <FaFemale />
                                Pijama Feminino
                            </Link>
                            {dropdowmFemi ? (<DropdownFeminino />) : null}
                        </Li>
                        <Li>
                            <Link to="/" onClick={handleClickMasc}>
                                <FaMale />
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
                                <RiUserSharedFill />
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
                                <FaMapMarkerAlt />
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
                                <FaMailBulk />
                                Contato
                            </Link>
                        </Li>
                    </Ul>
                </SidebarNav>
            </Background>
        </>
    )
}
