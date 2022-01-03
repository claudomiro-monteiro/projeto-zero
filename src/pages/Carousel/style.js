import styled from "styled-components";

export const App = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

export const CarouselDiv = styled.div`
  overflow: hidden;
  position: relative;
  /* top: 6rem; */
`;

export const Inner = styled.div`
  white-space: nowrap;
  transition: transform 0.5s;
`;

export const CarouselItens = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40vw;
  background-color: green;
  color: #fff;

  img {
    width: 100%;
    height: 100%;
    /* object-fit: cover; */
  }
`;

export const Left = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 47%;
  left: 1rem;
  color: #000;

  &:hover {
    cursor: pointer;
    color: #daa520;
    transition: all 0.3s;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Right = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 47%;
  right: 1rem;
  color: #000;

  &:hover {
    cursor: pointer;
    color: #daa520;
    transition: all 0.3s;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Indicators = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 1%;

  span {
    margin: 0.5rem 0.15rem;
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 50%;
    background-color: #000;
    cursor: pointer;
  }

  span.active {
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 50%;
    background-color: #daa520;
  }
`;
