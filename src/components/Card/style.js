import styled from 'styled-components';

export const Body = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
`;

export const CardContainer = styled.div`
    box-shadow: 0 0 1rem #333;
    /* width: 30rem; */
    max-width: 25rem;
    border-radius: 1rem;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    margin: 1rem;
    background-color: var(--card);
    font: var(--roboto);

    @media (max-width: 460px) {
        max-width: 90%;
    }
  
    @media (max-width: 320px) {
        max-width: 100%;
    }

`;

export const CardTitle = styled.div`
    /* font-size: 1.8rem; */
    /* font-weight: bold; */
    text-align: center;
    padding: 1rem;
`;
export const CardImage = styled.div`
    img {
        width: 100%
    }

    &:hover {
        cursor: pointer; 
        
    }
`;
export const CardBody = styled.div`
    p {
        display: flex;
        justify-content: center;
        margin: 1.2rem;
        /* font-size: 1.6rem; */
        /* font-weight: bold; */
        text-transform: capitalize; 
    }
`;
