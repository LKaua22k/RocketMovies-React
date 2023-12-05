import {styled} from 'styled-components'

export const Container = styled.textarea`
    width: 100%;
    height: 236px;

    resize: none;
    border: none;
    border-radius: 10px;
    padding: 16px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    color: ${({theme}) => theme.COLORS.WHITE};
    outline: none;

    &::placeholder{
        color: ${({theme}) => theme.COLORS.GRAY_100}; 
        }
`