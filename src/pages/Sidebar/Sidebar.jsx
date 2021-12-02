import React from 'react'
import { Avatar, Background, Li, Link, SidebarNav, Ul } from './style'

export const Sidebar = () => {
    return (
        <>
            <Background>
                <SidebarNav>
                    <Avatar>
                        Imagem
                    </Avatar>
                    <Ul>
                        <Li>
                            <Link to="/">
                                Pijama Feminino
                            </Link>
                        </Li>
                    </Ul>
                </SidebarNav>
            </Background>
        </>
    )
}
