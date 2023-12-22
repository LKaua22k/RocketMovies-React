import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({theme, isNew}) => isNew ? 'trasparent' : theme.COLORS.BACKGROUND_800};

    color: ${({theme}) =>theme.COLORS.GRAY_400 };
    border: ${({theme , isNew}) => isNew ? `2px dashed ${theme.COLORS.GRAY_400}`: 'none'};


    padding-right:12px;
    border-radius:10px;

    > input {

        width:100%;
        padding:16px;
        
        outline:none;
        border:transparent;
        background-color:transparent;

        color:${({theme}) => theme.COLORS.WHITE};

        &::placeholder{
            color:${({theme}) => theme.COLORS.GRAY_300};
        }

    }

    >button {
        border:none;
        background-color:transparent;
    }

    .button-delete{
        color:${({theme}) => theme.COLORS.ROSE};
    }

    .button-add{
        color:${({theme}) => theme.COLORS.ROSE};
    }
`