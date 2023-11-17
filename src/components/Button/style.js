import styled from "styled-components";

export const Container = styled.button`
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

    &:hover{
        opacity: 0.8;
        transition: .5s;
    }
`;