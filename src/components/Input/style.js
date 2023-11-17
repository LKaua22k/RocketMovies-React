import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    display: flex;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    color: ${({theme}) => theme.COLORS.GRAY_100}; 
    border-radius: 10px;
    margin-bottom: 8px;
    align-items: center;

    > input{
        width: 100%;
        height: 56px;
        background-color: transparent;
        border: none;
        outline: transparent;
        padding: 16px;
        color: ${({theme}) => theme.COLORS.WHITE};  

        &::placeholder{
        color: ${({theme}) => theme.COLORS.GRAY_100}; 
        }
    }

    >svg{
        margin-left: 16px;
    }

    
`;