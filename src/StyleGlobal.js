import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --goldenrod: #DAA520;
        --color: #1c1c1c;
        --background: #8A2BE2;
        --card: #d3d3d3;
        --backgroundnavbar:#FDFEFE;

        font-size: 62.5%;

        @media (max-width: 786px) {
            :root {
                font-size: 56.25%;
            }
        }
    }

    body {
        background: var(--background);
        color: var(--color);
        font: 500 1.6rem 'Playfair Display', serif;
        height: 100vh;
    }

    li, a {
        list-style: none;
        text-decoration: none;
        
    }
`