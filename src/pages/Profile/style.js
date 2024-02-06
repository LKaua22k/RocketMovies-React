import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    > header {
        width: 100%;
        height: 144px;
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_ROSE} ;

        display: flex;
        align-items: center;
        justify-items: center;

        padding: 0 168px;

        > button {
            font-size: 16px;
            font-weight: 400;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            color: ${({theme}) => theme.COLORS.ROSE};
            border: none;
            background-color: transparent;
        }
}
`

export const Form = styled.form`
    max-width: 340px;
    margin: 30px auto 0;

    div:nth-child(4){
        margin-top: 24px;
    } 

    > button{
        margin-top: 24px;
    }


`

export const Avatar = styled.div`
    width: 186px;
    height: 186px;
    margin: -120px auto 64px;
    position: relative;

    > img{
        width: 186px;
        height: 186px;    
        border-radius: 50% ;
    }

    > label {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background-color: ${({theme}) => theme.COLORS.ROSE};
        position: absolute;
        right: 7px;
        bottom: 7px;
        cursor: pointer;

        >svg{
            font-size: 20px;
            color: ${({theme}) => theme.COLORS.BACKGROUND_900};
        }

        > input{
        display: none;
    }
    }



`