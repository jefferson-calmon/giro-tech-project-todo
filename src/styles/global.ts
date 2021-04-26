import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: none;
        border: none;
        box-sizing: border-box;
        font-family: Roboto, Helvetica, Arial, sans-serif;
    }

    :root {
        --color-primary: #124ecb;
        --color-secondary: ;

        --color-box: rgba(221, 221, 221, 0.4);

        --color-title: #000;
        --color-text: rgba(0, 0, 0, .8);

        --color-background: linear-gradient(45deg, #124ecb, #1a2562);
    }

    .content {
        width: 1120px;
        margin: 0 auto;
    }

    html {
        font-size: 10px;
    }

    body.active {
        overflow: hidden;
    }

    html, body, #root {
        position: relative;
        min-height: 100vh;
        color: var(--color-text);
        background: var(--color-background);
        -webkit-font-smoothing: antialiased;
    }

    h1, h2, h3, h4 {
        color: var(--color-title);
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    button {
        cursor: pointer;
    }

    .shadow {
        position: absolute;
        width: 100%;
        height: 100%;

        background: rgba(0, 0, 0, .5);
    }


    @media (max-width: 1280px) {
        html {
            font-size: 9px;
        }

        .content {
            width: 80%;
        }
    }

    @media (max-width: 1024px) {
        html {
            font-size: 8px;
        }
    }

    @media (max-width: 768px) {
        html {
            font-size: 7px;
        }

        .content {
            width: 90%;
        }
    }

    @media (max-width: 425px) {
        html {
            font-size: 6px;
        }
    }
`;

export default GlobalStyle;