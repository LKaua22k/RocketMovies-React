import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;

    width: 100%;
    height: 112px;

    border-bottom: 1px solid;

    border-color: ${({theme}) => theme.COLORS.BORDER_COLOR};
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 64px;
    padding: 0 123px;

    > h1{
        font-size: 24px;
        font-weight: 700;
        color: ${({theme}) => theme.COLORS.ROSE};
    }
`

export const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: 9px;   

    > .Avatar img{
            width: 64px;
            height: 64px;
            border-radius: 50%;
    }

    > div{
        width: 85px;
        display: flex;
        flex-direction: column;
        align-items: end;


        > strong{
            font-size: 14px;
            color: ${({theme}) => theme.COLORS.WHITE};
        }

        > a {
            color: ${({theme}) => theme.COLORS.GRAY_100};
            font-size: 14px;
            font-weight: 400;
        }
    }
`

export const Search = styled.div`
    display: flex;
    align-items: center;
    padding: 0 64px;
    flex-grow: 1;
`