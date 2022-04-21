import React from 'react'
import Button from '../../../components/Button/Button'
import { ContainerWapper, Title } from '../../../components/ContainerWapper/style'
import { Body, CardBody, CardContainer, CardImage, CardTitle } from '../../../components/Card/style'
import { CuecaData } from './CuecaData'

export const Cueca = () => {
    return (
        <ContainerWapper id="cueca">
            <Title>Cueca</Title>
            <Body>
                {CuecaData.map((card) => {  
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
