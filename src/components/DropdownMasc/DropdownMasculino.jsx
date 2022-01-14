import React from 'react'
import { DropdowmMasculinoItems } from '../../components/DropdownMasc/DropdownmasculinoItems'
import { Dropdown, List, Link } from './style'

export const DropdownMasculino = ({ closeDropdown }) => {
    return (
        <Dropdown>
            {DropdowmMasculinoItems.map((item, index) => {
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