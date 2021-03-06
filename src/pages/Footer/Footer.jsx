import React from 'react';
import { FaFacebook, FaInstagram, FaMailBulk, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-scroll';
// import { RedeLi, RedeUl } from '../Sidebar/style';
import { Adress, Footers, LinkRede, RedeSocial } from './style';

export const Footer = () => {

    return (
        <>
            <Footers>
                <RedeSocial>
                    <div className="link">
                        <h3>Pijamas</h3>
                        <Link className="social"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={-70}
                            duration={400}
                            delay={100}
                            to="femininoadulto"
                        >
                            Pijama Feminino
                        </Link>
                        <Link className="social"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={-70}
                            duration={400}
                            delay={100}
                            to="masculinoadulto"
                        >
                            Pijama Masculino
                        </Link>
                        <Link className="social"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={-70}
                            duration={400}
                            delay={100}
                            to="infantil"
                        >
                            Pijama Infantil
                        </Link>
                    </div>
                    <div className="link">
                        <h3>Contato</h3>
                        <LinkRede href="tel:1231576205">
                            <FaPhone size="3rem" />
                            <div className="hide">(12) 3157-6205</div>
                        </LinkRede>
                        <LinkRede href="https://wa.me/5512988383481">
                            <FaWhatsapp size="3rem" />
                            <div className="hide">(12) 98838-3481</div>
                        </LinkRede>
                        <LinkRede href="mailto:sensualmdintima@gmail.com?subject=Contato pelo Site.">
                            <FaMailBulk size="3rem" />
                            <div className="hide">sensualmdintima@gmail.com</div>
                        </LinkRede>
                    </div>
                    <div className="link">
                        <h3>Rede Social</h3>
                        <LinkRede href="https://www.facebook.com/Sensual-Moda-Intima-708833402783149">
                            <FaFacebook size="3rem" />
                        </LinkRede>
                        <LinkRede href="https://www.instagram.com/sensual.moda.intima/">
                            <FaInstagram size="3rem" />
                        </LinkRede>
                    </div>
                </RedeSocial>
                <Adress>
                    <span>Rua: Comendador Cust??dio Vieira, 15</span>
                    <span>Centro - Lorena - SP</span>
                    <span>CEP: 12600-030</span>
                    <span>Todos Direitos Reservados | Sensual Moda Intima | 2021</span>
                </Adress>
                {/* <RedeUl>
                        <RedeLi>
                            <LinkRede href="https://wa.me/5512988383481">
                                <FaWhatsapp size="3rem"/>
                            </LinkRede>
                        </RedeLi>
                        <RedeLi>
                            <LinkRede href="https://www.facebook.com/Sensual-Moda-Intima-708833402783149">
                                <FaFacebook size="3rem"/>
                            </LinkRede>
                        </RedeLi>
                        <RedeLi>
                            <LinkRede href="https://www.instagram.com/sensual.moda.intima/">
                                <FaInstagram size="3rem"/>
                            </LinkRede>
                        </RedeLi>
                    </RedeUl> */}
            </Footers>
        </>
    )
}



