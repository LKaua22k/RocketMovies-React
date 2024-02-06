import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    width: 100%;
    height: 100vh;
    grid-template-rows: 112px auto;
    grid-template-areas:
    "header"
    "content"
    ;

    > main{
        grid-area: content;
        padding: 40px 123px;
        overflow-y: auto;
    }


`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1137px;
    margin: 0 auto;
    

    > a {
        display: flex;
        align-items: center;
        gap: 8px;
        color: ${({theme}) => theme.COLORS.ROSE};

        > svg{
            font-size: 16px;
        }
    }

    .Title{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 19px;

        > h1 {
        font-size: 36px;
        font-weight: 500;
        margin: 24px 0;
        }

        >ul{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;

            > svg {
                font-size: 22px;
                align-items: center;
                color: ${({theme}) => theme.COLORS.ROSE};
                fill: ${({theme}) => theme.COLORS.ROSE} ;
            }
        }


    }

    > p{
        font-size: 16px;
        font-weight: 400;
    }

    > footer button{
            background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
            color: ${({theme}) => theme.COLORS.ROSE};
            width: 300px;
            margin-top: 30px;
        }
`;

export const Status = styled.div`
    display: flex;
    gap: 8px;

    > div{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;

        > img,svg{
            width: 16px;
            height: 16px;
            border-radius: 50%;
            color: ${({theme}) => theme.COLORS.ROSE};
        }

        > span {
            font-size: 16px;
            font-weight: 400;
            color: ${({theme}) => theme.COLORS.WHITE};
        }

    }
`

export const Cate = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 8px;
    margin: 40px 0;

    > span {
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    }
`