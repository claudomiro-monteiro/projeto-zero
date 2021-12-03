import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll'

export const Dropdown = styled.ul`
    display: flex;
    align-items: center;
    flex-flow: column;
    position: absolute;
    top: 6rem;
    background: var(--color);
    border-radius: 0.5rem;

    @media (max-width: 768px) {
        position: relative;
        display: flex;
        flex-flow: column;
        top: 0;
        background: var(--colorrgba);
        border-radius: 0;
        width: 100%;
    }
`
export const List = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`

export const Link = styled(LinkS)`
    font-size: 1.8rem;
    width: 100%;
    padding: 0.8rem 2rem;
    padding-left: 6rem;
    color: var(--backgroundnavbar);

        &:hover {
            background: var(--goldenrodrgba);
            color: var(--color);
            cursor: pointer;
            transition: all 0.2s ease-out;
        }
`