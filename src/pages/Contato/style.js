import styled from 'styled-components';

export const Body = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
`;

export const Form = styled.form`
    width: 95%;
    display: flex;
    flex-flow: column;
    background: var(--card);
    padding: 3rem;
    margin-bottom: 2rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 1rem var(--cardrgba);
`

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    font: var(--roboto);

    @media (max-width: 768px) {
        display: flex;
        flex-wrap: wrap;
    }
`
export const Left = styled.div`
    width: 100%;
    padding: 0 1rem;

    @media (max-width: 768px) {
        width: 100%;
    }
`
export const Right = styled.div`
    width: 100%;
    padding: 0 1rem;

@media (max-width: 768px) {
        width: 100%;
    }
`
export const InputData = styled.div`
    position: relative;
    height: 4rem;
    margin-bottom: 3rem;

    input {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        border: none;
        border-bottom: var(--borderbotton);
        outline: 0;
        padding: 1rem;
        background: none;
    } 

    textarea {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        border: none;
        border-bottom: var(--borderbotton);
        outline: 0;
        padding: 1rem;
        overflow-y: hidden;
        background: none;
    } 

    .form_input:focus + .form_label {
        transform: translateY(-1.8rem);
        left: 1rem;
        color: var(--goldenrod);
        font-size: 1.4rem;
        z-index: 10;
}

    .form_input:not(:placeholder-shown).form_input:not(:focus)+ .form_label {
        transform: translateY(-1.8rem);
        left: 1rem;
        color: var(--goldenrod);
        font-size: 1.4rem;
        z-index: 10;
    }

    .form_input:not(:placeholder-shown).form_input:not(:focus) {
        border-bottom: .1rem solid var(--goldenrod);
    }

    span {
        display: flex;
        position: absolute ;
        margin-top: 4.5rem;
        color: red;
        font-size: 1.2rem;
    }
`
export const Label = styled.label`
    position: absolute;
    top: 1rem;
    left: 1rem;
    color: var(--borderbotton);
    padding: 0 .25rem;
    pointer-events: none;
    transition: 0.3s ease;
` 

export const ButtonMsg = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    .msg {
        display: block;
        width: auto;
        background: var(--msg);
        padding: 1rem 2rem;
        margin: 1rem 0;
        border-radius: 0.5rem;
    }

    .msgerro {
        display: block;
        width: auto;
        background: var(--msgerro);
        padding: 1rem 2rem;
        margin: 1rem 0;
        border-radius: 0.5rem;
    }


    @media (max-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: center;

        .msg {
            display: block;
            width: auto;
            background: var(--msg);
            padding: 1rem 2rem;
            border-radius: 0.5rem;
        }
    }

    @media (max-width: 425px) {
        .msg {
            display: flex;
            width: auto;
            background: var(--msg);
            padding: 1rem 2rem;
            border-radius: 0.5rem;
        }
    }
`
export const Button = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;

    button {
        padding: 1rem 2rem;
        outline: none;
        border: none;
        border-radius: 0.5rem;
        background-color: #daa520;
        color: #000;
        font: var(--roboto);
        cursor: pointer;
    }

    button:hover {
        color: #fff;
        filter: brightness(0.9);
    }

    button span {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    button span svg {
        margin-left: 1rem;
    }

    @media (max-width: 425px) {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem;
        outline: none;
        border: none;
        border-radius: 0.5rem;
        background-color: #daa520;
        color: #000;
        cursor: pointer;
    }
`
