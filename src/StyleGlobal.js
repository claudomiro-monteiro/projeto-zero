import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --goldenrod: #DAA520;
        --goldenrodrgba: rgba(218,165,32,0.9);
        --color: #1C1C1C;
        --colorwhite: #FCFCFC;
        --colorrgba: rgba(28,28,28,0.9);
        --background: #8A2BE2;
        --backgroundrgba: rgba(0, 0, 0, 0.8);
        --card: #FCFCFC;
        --cardrgba: rgba(252, 252, 252, 0.8);
        --backgroundnavbar:#FDFEFE;
        --borderbotton: 0.1rem solid #333333;
        --msg: #3CB371;
        --msgerro: #FC0101;

        --roboto: 400 1.8rem 'Roboto Slab', serif;
        --playfair: 400 1.8rem 'Playfair Display', serif;
        --yuji: 400 2rem 'Yuji Syuku', serif;

        font-size: 62.5%;

        @media (max-width: 768px) {
            :root {
                font-size: 56.25%;
            }
        }
    }

    body {
        display: flex;
        justify-content: center;
        background: var(--background);
        color: var(--color);
        font: var(--playfair);
        height: 100vh;
        width: 100%;
        /* overflow-x: hidden; */
    }

    li, a {
        list-style: none;
        text-decoration: none;
        
    }
`