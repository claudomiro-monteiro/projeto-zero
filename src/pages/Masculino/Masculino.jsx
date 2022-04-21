import React from 'react'
import { Adulto } from './Adulto/Adulto'
import { Infantil } from './Infantil/Infantil'
import { Cueca } from './Cueca/Cueca' 

export const Masculino = () => {
    return (
        <>
            <Adulto />
            <Infantil />
            <Cueca />
        </>
    )
}
