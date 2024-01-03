import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-rows: 112px auto auto ;
    grid-template-areas: 
    "header"
    "brand"
    "content"
    ;
    width: 100%;

    > section{
        grid-area: brand;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0 123px;
        margin-top: 52px;

        > h1{
            font-size:32px;
            font-weight: 400;
        }

        >button{
            width: fit-content;
        }
    }
`

export const Content = styled.div`
    grid-area: content;
    width: 100%;
    padding: 0 123px;
    margin-top: 30px;
`