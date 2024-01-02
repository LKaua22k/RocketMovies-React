import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
        color: ${({theme}) => theme.COLORS.WHITE};
        -webkit-font-smoothing: antialiased;
    }

    body,button,textarea,input{
        font-family: 'Roboto Slab', serif;
    }

    a {
        text-decoration: none;
        cursor: pointer
    }

    ul{
        list-style: none;
    }
    
    button{
        cursor: pointer;
    }
`;