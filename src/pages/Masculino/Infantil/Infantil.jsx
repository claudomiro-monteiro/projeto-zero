import React from 'react'
import Button from '../../../components/Button/Button'
import { ContainerWapper, Title } from '../../../components/ContainerWapper/style'
import { Body, CardBody, CardContainer, CardImage, CardTitle } from '../../../components/Card/style'
import { InfantilData } from './InfantilData'

export const Infantil = () => {
    return (
        <ContainerWapper id="masculinoinfantil">
            <Title>Masculino Infantil</Title>
            <Body>
                {InfantilData.map((card) => {
                    return (
                        <CardContainer key={card.id}>
                            <CardTitle>
                                {card.title}
                            </CardTitle>
                            <CardImage>
                                <img src={card.img} alt='card' />
                            </CardImage>
                            <CardBody>
                                <p>{card.tamanho}</p>
                                <p>{card.preco}</p>
                            </CardBody>
                            <Button card={card}/>
                        </CardContainer>
                    )
                })}
            </Body>
        </ContainerWapper>
    )
}
