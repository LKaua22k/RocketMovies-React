import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 112px auto;
    grid-template-areas:
    "header"
    "content";

    > main {
        grid-area: content;
        overflow-y: auto;
    }
`

export const Form = styled.form`
    max-width: 1137px;
    margin: 40px auto;

    > header {
        display: flex;
        flex-direction: column;
        align-items: left;
        justify-content: center;
        gap: 24px;

        > a{
            display: flex;
            align-items: center;
            gap: 8px;
            color: ${({theme}) => theme.COLORS.ROSE};
            border: none;
            background: transparent;

            > svg{
                font-size: 16px;
            }
        }
    }

    .inputs {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 40px;
        margin: 40px 0;
    }

    > section{
        margin: 40px 0;

        h2{
            font-size: 20px;
            font-weight: 400;
            color: ${({theme}) => theme.COLORS.GRAY_400};
        }

        .tags{
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
            border-radius: 8px;
            padding: 16px;
            margin-top: 24px;
            gap: 20px;
        }
    }

    .btns{
        display: flex;
        gap: 40px;

        > button:first-child{
            background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
            color: ${({theme}) => theme.COLORS.ROSE};
        }
    }
`;
