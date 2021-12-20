import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable"; 

import {
    CarouselItens,
    CarouselDiv,
    Inner,
    Left,
    Right,
    Indicators
} from "./style";
import { BiChevronRightCircle, BiChevronLeftCircle } from "react-icons/bi";

export const CarouselItem = ({ children, width }) => {
    return <CarouselItens style={{ width: width }}>{children}</CarouselItens>;
};

export const Carousel = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children) - 1;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0;
        }
        setActiveIndex(newIndex);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            updateIndex(activeIndex + 1);
        }, 3000);

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    });

    const handlers = useSwipeable({
        onSwipedLeft: () => updateIndex(activeIndex - 1),
        onSwipedRight: () => updateIndex(activeIndex + 1)
    });

    return (
        <CarouselDiv {...handlers}>
            <Inner style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: "100%" });
                })}
            </Inner>
            <Right>
                <BiChevronRightCircle
                    fontSize={35}
                    onClick={() => {
                        updateIndex(activeIndex + 1);
                    }}
                />
            </Right>
            <Left>
                <BiChevronLeftCircle
                    fontSize={35}
                    onClick={() => {
                        updateIndex(activeIndex - 1);
                    }}
                />
            </Left>
            <Indicators>
                {React.Children.map(children, (child, index) => {
                    return (
                        <span
                            className={`${index === activeIndex ? "active" : ""}`}
                            onClick={() => {
                                updateIndex(index);
                            }}
                        >
                            {/* {index} */}
                        </span>
                    );
                })}
            </Indicators>
        </CarouselDiv>
    );
};
