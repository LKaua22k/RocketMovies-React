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
    overflow-y:auto;
    padding: 0 123px;
    margin-top: 30px;

    > section{
        display: flex;
        gap: 15px;
        flex-direction: column;
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
        padding: 32px;
        border-radius: 16px;

        strong{
            font-size: 24px;
            font-weight: 700;
        }

        p{
            color: ${({theme}) => theme.COLORS.GRAY_400};
            font-size: 16px;
            font-weight: 400;
            align-self: stretch;
        }

        ul{
            display: flex;
            gap: 8px;

            >li {
                background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
                padding: 5px 16px;
                border-radius: 10px;
            }
        }
    }
`