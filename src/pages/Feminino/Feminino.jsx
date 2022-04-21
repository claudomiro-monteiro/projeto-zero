import React from 'react'
import { Adulto } from './Adulto/Adulto'
import { Calcinha } from './Calcinha/Calcinha'
import { Camisola } from './Camisola/Camisola'
import { Gestante } from './Gestante/Gestante'
import { Infantil } from './Infantil/Infantil'
import { SexShop } from './SexShop/SexShop'
import { Sexy } from './Sexy/Sexy'
import { Soutien } from './Soutien/Soutien'

export const Feminino = () => {
    return (
        <>
            <Adulto />
            <Infantil />
            <Camisola />
            <Calcinha />
            <Soutien />
            <Gestante />
            <Sexy />
            <SexShop />
        </>
    )
}
