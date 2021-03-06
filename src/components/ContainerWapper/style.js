import styled from 'styled-components';

export const ContainerWapper = styled.div`
    display: flex;
    flex-flow: column;
    align-items: stretch;
    margin: 1rem 1.5rem;
    background-color: var(--cardrgba);
    border-radius: 0.7rem;

    @media (max-width: 768px) {
        margin: 2rem;
    }
`
export const Title = styled.div`
    display: flex;
    margin-right: auto;
    padding: 1rem 2rem;
    font-size: 2rem;
    font-weight: bold;
`