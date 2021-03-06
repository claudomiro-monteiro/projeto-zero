import React from 'react'
import { DropdowmFemininoItems } from './DropdownFemininoItens'
import { Dropdown, List, Link } from './style'

export const DropdownFeminino = ({closeDropdown}) => {
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
                            offset={item.offset}
                            duration={400}
                            delay={100}
                            onClick={closeDropdown}
                            >
                            {item.title}
                        </Link>
                    </List>
                )
            })}
        </Dropdown>
    )
}