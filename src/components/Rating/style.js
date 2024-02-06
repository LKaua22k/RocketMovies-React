import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: ${({isBig}) => (isBig ? "10px" : "6px") };

    svg{
        font-size: ${({isBig}) => (isBig ? "20px" : "12px") }; ;
        color: ${({theme}) => theme.COLORS.ROSE};
    }
`