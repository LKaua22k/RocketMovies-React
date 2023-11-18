import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display:flex;

    align-items: stretch;
`;

export const Form = styled.form`
    padding: 0 134px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    
    >h1 {
        font-size: 48px;
        font-weight: 700;
        color: ${({theme}) => theme.COLORS.ROSE};
    }

    > p{
        font-size: 14px;
        font-weight: 400;
        color: ${({theme}) => theme.COLORS.GRAY_200};
    }

    > h2{
        font-size: 24px;
        font-weight: 500;
        margin: 42px 0 ;
    }

    a{
        display: flex;
        justify-content: center;
        gap: 8px;
        font-size: 16px;
        font-weight: 400;
        text-align: center;
        align-items: center;
        margin-top: 42px;
        color: ${({theme}) => theme.COLORS.ROSE};
        transition: .5s;


        &:hover{
            opacity: 0.5;
            transition: .5s;
        }

        > svg{
            font-size: 20px;
        }
    }

    > button{
        margin-top: 16px;
    }
`;

export const Background = styled.img`
    flex: 1;
    background: no-repeat center center;
    object-fit: cover;
`;