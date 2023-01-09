import { createGlobalStyle } from "styled-components";

//
import "normalize.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./font.css";

const GlobalStyles = createGlobalStyle`
    *, *::after, *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Rubik', sans-serif;
    }

    h1, h2, h3, h4, h5, h6, p, ol, ul {
        margin: 0;
        padding: 0;
    }

    body {
        ${"" /* background-color: #7B61FF; */}
    }

    .container {
        max-width: 1440px;
        margin: 0 auto;
    }
    
`;

export default GlobalStyles;
