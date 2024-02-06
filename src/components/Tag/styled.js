import styled from "styled-components";

export const Container = styled.span`
    margin-right: 6px;
    width: fit-content;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    padding: 5px 16px;
    border-radius: 10px;
`;