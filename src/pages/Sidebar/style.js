import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll'

export const Background = styled.div`
    position: fixed;
    display: flex;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    top: ${({ sidebar }) => (sidebar ? '6rem' : '-100%')};
    z-index: 3;
`

export const SidebarNav = styled.nav`
    background: var(--goldenrod);
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    width: 30rem;
    height: 90%;
    position: fixed;
    top: 6rem;
    right: 0;
    /* right: ${({ sidebar }) => (sidebar ? '0' : '-100%')}; */
    transition: 500ms;
    z-index: 3;
    overflow-y: auto;
`

export const Avatar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 10rem;
        height: 10rem;
        border-radius: 50%;
    }
`

export const Ul = styled.ul`
    display: flex;
    /* height: 100%; */
    width: 100%;
    flex-flow: column;
    margin-bottom: 2rem;
`

export const Li = styled.li`
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: start;
    width: 100%;
    /* height: 6rem; */
    
`

export const Link = styled(LinkS)`
    display: flex;
    align-items: center;
    font-size: 1.8rem;
    padding: 0.8rem 2rem;
    color: var(--color);
    width: 100%;
    gap: 1rem;

        &:hover {
            /* border-radius: .5rem; */
            background: var(--color);
            color: var(--backgroundnavbar);
            cursor: pointer;
            transition: all 0.2s ease-out;
            width: 100%;
        }
`
export const Hr = styled.hr`
    border-color: var(--color);
` 

export const RedeUl = styled.ul`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 100%;
`
export const RedeLi = styled.li`
    display: flex;
    cursor: pointer;
    margin-bottom: 2rem;
`
export const LinkRede = styled.a`
    display: flex;
    text-decoration: none;
    color: var(--color);
`

export const Icons = styled.span`
    display: flex;
`
export const Label = styled.span`
    display: flex;
    margin-left: 1rem;
`