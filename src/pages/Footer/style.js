import styled from 'styled-components';

export const Footers = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    background: var(--goldenrod);
    height: 100%;
    font: var(--roboto);
    font-size: 1.8rem;
    padding: 2rem;
`;

export const RedeSocial = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-around;
    width: 80%;
    padding: 1rem 0;

    .link {
        display: flex;
        flex-flow: column; 
        align-items: center;
        justify-content: center; 
        padding: 2rem 5rem;
    }

    /* .social {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        margin: 0.5rem;
        text-decoration: none;
        color: var(--color);
} */

    .space {
        margin-right: 0.5rem;
}

    @media (max-width: 768px) {
        .hide {
            display: none;
        }
    }
`;

export const LinkRede = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 0.5rem;
    text-decoration: none;
    color: var(--color);
`

export const Adress = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 1rem;
    line-height: 2rem;
`;

