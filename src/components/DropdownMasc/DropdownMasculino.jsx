import React from 'react'
import { DropdowmMasculinoItems } from '../../components/DropdownMasc/DropdownmasculinoItems'
import { Dropdown, List, Link } from './style'

export const DropdownMasculino = () => {
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