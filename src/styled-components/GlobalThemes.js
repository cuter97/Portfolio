import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Poppins",sans-serif;
        scroll-behavior: smooth;
    }
    
    body{
        background-color: ${props => props.theme.bg};
        transition: .4s;
    }

    .header-container{
        height: 90vh;
    }
`;