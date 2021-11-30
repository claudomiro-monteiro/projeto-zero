import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    width: 100%;
    height: 6rem;
    background: var(--goldenrod);
    font: 500 1.6rem 'Yuji Syuku', serif;
    padding: 0 4rem;
    position: fixed;
`
export const NavLogo = styled.div`
    display: flex;
    align-items: center;
    font-size: 2rem;
`
export const Ul = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;

    @media (max-width: 768px) {
        display: none;
    }
`
export const Li = styled.li`
    display: flex;
    align-items: center;
    height: 6rem;
    /* width: 100%; */
`
export const Link = styled(LinkS)`
    font-size: 1.8rem;
    width: 100%;
    padding: 0.8rem 2rem;
    color: var(--color);

    &:hover {
        border-radius: 0.5rem;
        background: var(--color);
        color: var(--backgroundnavbar);
        cursor: pointer;
        transition: all 0.2s ease-out;
    }
`