import React from 'react'
import { Ul, Li, Link, SidebarNav, Avatar, RedeUl, RedeLi, Hr, LinkRede } from './style'

// import avatar from '../../assets/1009.png'

// import { DropdownFeminino } from '../../components/DropdownFemi/DropdownFeminino'
// import { DropdownMasculino } from '../../components/DropdownMasc/DropdownMasculino'
import * as AiIcons from 'react-icons/ai'
import * as RiIcons from 'react-icons/ri'
import * as FaIcons from 'react-icons/fa'
import * as GiIcons from 'react-icons/gi'

export const Sidebar = () => {

    return (
        <>
            {/* <Background> */}
                <SidebarNav>
                    <Ul>
                        <Avatar>
                            Imagem
                            {/* <img src={avatar} alt="avatar" /> */}
                        </Avatar>
                        <Li>
                            <Link activeClass="active"
                                to="/"
                                spy={true}
                                smooth={true}
                                hashSpy={true}
                                offset={-60}
                                duration={400}
                                delay={100}
                            >
                                <AiIcons.AiFillHome />
                                Inicio
                            </Link>
                        </Li>
                        <Li>
                            <Link to="/" >
                                <FaIcons.FaFemale />
                                Feminino
                            </Link>
                            {/* {dropdownFemi ? (<DropdownFeminino closeDropdown={closeDropdown} />) : null} */}
                        </Li>
                        <Li>
                            <Link to="/" >
                                <FaIcons.FaMale />
                                Masculino
                            </Link>
                            {/* {dropdownMasc ? (<DropdownMasculino closeDropdown={closeDropdown} />) : null} */}
                        </Li>
                        <Li>
                            <Link activeClass="active"
                                to="quemsomos"
                                spy={true}
                                smooth={true}
                                hashSpy={true}
                                offset={-52}
                                duration={400}
                                delay={100}
                            >
                                <RiIcons.RiUserSharedFill />
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
                                <GiIcons.GiPositionMarker />
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
                                <AiIcons.AiFillMail />
                                Contato
                            </Link>
                        </Li>
                    </Ul>
                    <Hr />
                    <RedeUl>
                        <RedeLi>
                            <LinkRede href="https://wa.me/5512988383481">
                                <FaIcons.FaWhatsapp size="3rem" />
                            </LinkRede>
                        </RedeLi>
                        <RedeLi>
                            <LinkRede href="https://www.facebook.com/Sensual-Moda-Intima-708833402783149">
                                <FaIcons.FaFacebook size="3rem" />
                            </LinkRede>
                        </RedeLi>
                        <RedeLi>
                            <LinkRede href="https://www.instagram.com/sensual.moda.intima/">
                                <FaIcons.FaInstagram size="3rem" />
                            </LinkRede>
                        </RedeLi>
                    </RedeUl>
                </SidebarNav>
            {/* </Background> */}
        </>
    )
}

