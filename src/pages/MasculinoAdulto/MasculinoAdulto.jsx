import React from 'react'
import Button from '../../components/Button/Button'
import { Body, CardBody, CardContainer, CardImage, CardTitle } from '../../components/Card/style'
import { ContainerWapper, Title } from '../../components/ContainerWapper/style'
import { MasculinoAdultoData } from './MasculinoAdultoData'

export const MasculinoAdulto = () => {
    return (
        <ContainerWapper id="masculinoadulto">
            <Title>Masculino Adulto</Title>
            <Body>
                {MasculinoAdultoData.map((card) => {
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
