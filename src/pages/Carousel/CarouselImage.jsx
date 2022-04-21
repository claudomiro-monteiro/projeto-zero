// import "./styles.css";
import React from 'react'
import { Carousel, CarouselItem } from './Carousel'

import img01 from '../../assets/slide_01.png'
import img02 from '../../assets/slide_03.png'
import img03 from '../../assets/slide_04.png'
import img04 from '../../assets/slide_05.png'

export const CarouselImage = () => {
    return (
        <>
            <Carousel>
                <CarouselItem>
                    <img src={img01} alt="slide" />
                </CarouselItem>
                <CarouselItem>
                    <img src={img02} alt="slide" />
                </CarouselItem>
                <CarouselItem>
                    <img src={img03} alt="slide" />
                </CarouselItem>
                <CarouselItem>
                    <img src={img04} alt="slide" />
                </CarouselItem>
            </Carousel>
        </>
    )
}

// export default CarouselImage
