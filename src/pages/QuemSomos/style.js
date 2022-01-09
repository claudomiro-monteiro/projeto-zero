import styled from 'styled-components';

export const Body = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

    @media (max-width: 768px) {
        justify-content: center;
    }
`;

export const Texto = styled.div`
    display: flex;
    align-items: center;
    padding: 2rem;
    width: 50%;
    
    p {
        text-align: center;
        text-transform: none;
        font: var(--roboto);
        font-size: 1.8rem;
    }
    @media (max-width: 768px) {
        justify-content: center;
        width: 100%;
        /* font-size: 1.4rem; */
    }
`;

export const Image = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem;
    img {
        width: 28rem;
        border-radius: 50%
    }

    @media (max-width: 768px) {
        justify-content: center;
    }
`;