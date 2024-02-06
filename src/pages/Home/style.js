import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    width: 100%;
    grid-template-rows: 112px auto auto ;
    grid-template-areas: 
    "header"
    "brand"
    "content"
    ;

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

        >a{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 56px;
            padding: 0 16px;
            border-radius: 10px;
            background-color: ${({theme}) => theme.COLORS.ROSE};
            color: ${({theme}) => theme.COLORS.BACKGROUND_700};
            border: none;
            font-size: 16px;
            font-weight: 500;
            transition: .5s;
            width: fit-content;


            &:hover{
                opacity: 0.8;
                transition: .5s;
            }

            > svg {
                margin-right: 8px;
            }
        }
    }
`

export const Content = styled.div`
    grid-area: content;
    width: 100%;
    padding: 0 123px;
    margin-top: 30px;
    overflow-y: ;
`