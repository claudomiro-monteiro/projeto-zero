import React from "react";
import styled from "styled-components";

const StyledBurger = styled.button`

  @media (max-width: 768px) {
    position: absolute;
    /* top: %; */
    right: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;

    &:focus {
        outline: none;
  }
    div {
    width: 2.1rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? "#f4f4f4" : "#040404")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
  }

  @media (min-width: 960px) {
      display: none;
  }
`;

export const Burger = ({ open, handleClick }) => {

    return (
        <StyledBurger open={open} onClick={handleClick}>
            <div />
            <div />
            <div />
        </StyledBurger>
    );
};

// export default Burger;