import React from 'react'
import { Link } from 'react-scroll'
import { FaWhatsapp } from "react-icons/fa";

import { Adress, Footers, RedeSocial } from './style'

export const Footer = () => {

    return (
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
                    <a href="tel:1231576205" className="social">
                        {/* <FaPhone className="space" size="3rem" /> */}
                        <div className="hide">(12) 3157-6205</div>
                    </a>
                    <a href="https://wa.me/5512988383481" className="social">
                        <FaWhatsapp className="space" size="3rem" />
                        <div className="hide">(12) 98838-3481</div>
                    </a>
                    <a href="mailto:sensualmdintima@gmail.com?subject=Contato pelo Site." className="social">
                        {/* <FaMailBulk className="space" size="3rem" /> */}
                        <div className="hide">sensualmdintima@gmail.com</div>
                    </a>
                </div>
                <div className="link">
                    <h3>Rede Social</h3>
                    <a href="https://www.facebook.com/Sensual-Moda-Intima-708833402783149" className="social">
                        {/* <FaFacebookF size="3rem" /> */}
                    </a>
                    <a href="https://www.instagram.com/sensual.moda.intima/" className="social">
                        {/* <FaInstagram size="3rem" /> */}
                    </a>
                </div>
            </RedeSocial>
            <Adress>
                <span>Rua: Comendador Custódio Vieira, 15</span>
                <span>Centro - Lorena - SP</span>
                <span>CEP: 12600-030</span>
                <span>Todos Direitos Reservados | Sensual Moda Intima | 2021</span>
            </Adress>
        </Footers>
    )
}



