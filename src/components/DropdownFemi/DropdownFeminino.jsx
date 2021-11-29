import React from 'react'
import { DropdowmFemininoItems } from './DropdownFemininoItens'
import { Dropdown, List, Link } from './style'

export const DropdownFeminino = () => {
    return (
        <Dropdown>
            {DropdowmFemininoItems.map((item, index) => {
                return ( 
                    <List key={index}>
                        <Link activeClass="active"
                            to={item.path}
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={-60}
                            duration={400}
                            delay={100}>
                            {item.title}
                        </Link>
                    </List>
                )
            })}
        </Dropdown>
    )
}