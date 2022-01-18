import React, { useRef, useState } from 'react'
import { animateScroll as scroll } from 'react-scroll'
// import { FaFacebook, FaFemale, FaHome, FaInstagram, FaMailBulk, FaMale, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { RiUserSharedFill } from "react-icons/ri";
import avatar from '../../assets/1009.png'

import { DropdownFeminino } from '../../components/DropdownFemi/DropdownFeminino'
import { DropdownMasculino } from '../../components/DropdownMasc/DropdownMasculino'
import { Avatar, Background, Hr, Li, Link, LinkRede, RedeLi, RedeUl, SidebarNav, Ul } from './style'

export const Sidebar = ({sidebar, setSidebar, handleClick}) => {

    const modalRef = useRef()

    const closedSidenav = (e) => {
        if(modalRef.current === e.target) {
            setSidebar(false)
            closeDropdown()
        }
    }

    const scrollToTop = () => {
        scroll.scrollToTop();
        closeDropdown()

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

    const closeDropdown = () => {
        handleClick()
        setDropdowmFemi(false)
        setDropdowmMasc(false)
    }

    return (
        <>
            <Background sidebar={sidebar} ref={modalRef} onClick={closedSidenav}>
                <SidebarNav sidebar={sidebar}> 
                    <Avatar>
                        <img src={avatar} alt="avatar" onClick={closeDropdown}/>
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
                                {/* <FaHome /> */}
                                Inicio
                            </Link>
                        </Li>
                        <Li>
                            <Link to="/" onClick={handleClickFemi}>
                                {/* <FaFemale /> */}
                                Pijama Feminino
                            </Link>
                            {dropdowmFemi ? (<DropdownFeminino closeDropdown={closeDropdown} />) : null}
                        </Li>
                        <Li>
                            <Link to="/" onClick={handleClickMasc}>
                                {/* <FaMale /> */}
                                Pijama Masculino
                            </Link>
                            {dropdowmMasc ? (<DropdownMasculino closeDropdown={closeDropdown} />) : null}
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
                            onClick={closeDropdown}
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
                            onClick={closeDropdown}
                            >
                                {/* <FaMapMarkerAlt /> */}
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
                            onClick={closeDropdown}
                            >
                                {/* <FaMailBulk /> */}
                                Contato
                            </Link>
                        </Li>
                    </Ul>
                    <Hr />
                    <RedeUl>
                        <RedeLi>
                            <LinkRede href="https://wa.me/5512988383481">
                                {/* <FaWhatsapp size="3rem"/> */}
                            </LinkRede>
                        </RedeLi>
                        <RedeLi>
                            <LinkRede href="https://www.facebook.com/Sensual-Moda-Intima-708833402783149">
                                {/* <FaFacebook size="3rem"/> */}
                            </LinkRede>
                        </RedeLi>
                        <RedeLi>
                            <LinkRede href="https://www.instagram.com/sensual.moda.intima/">
                                {/* <FaInstagram size="3rem"/> */}
                            </LinkRede>
                        </RedeLi>
                    </RedeUl>
                </SidebarNav>
            </Background>
        </>
    )
}
