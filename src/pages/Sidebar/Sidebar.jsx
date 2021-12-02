import React, { useState } from 'react'
import { DropdownFeminino } from '../../components/DropdownFemi/DropdownFeminino'
import { Avatar, Background, Li, Link, SidebarNav, Ul } from './style'

export const Sidebar = () => {

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
                            <Link to="/" onClick={handleClickFemi}>
                                Pijama Feminino
                            </Link>
                            {dropdowmFemi ? (<DropdownFeminino />) : null}
                        </Li>
                        <Li>
                            <Link to="/">
                                Pijama Masculino
                            </Link>
                        </Li>
                        <Li>
                            <Link to="/">
                                Quem Somos
                            </Link>
                        </Li>
                        <Li>
                            <Link to="/">
                                Localização
                            </Link>
                        </Li>
                        <Li>
                            <Link to="/">
                                Contato
                            </Link>
                        </Li>
                    </Ul>
                </SidebarNav>
            </Background>
        </>
    )
}
