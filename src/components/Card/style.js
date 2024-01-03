import styled from "styled-components";

export const Container = styled.div`
        display: flex;
        gap: 15px;
        flex-direction: column;
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
        padding: 32px;
        border-radius: 16px;
        margin: 24px 0;

        > header {
            display: flex;
            flex-direction: column;
            gap: 8px;

            > strong{
                font-size: 24px;
                font-weight: 700;
            }

            .stars{
                color: ${({theme}) => theme.COLORS.ROSE};

                > svg{
                    fill: ${({theme}) => theme.COLORS.ROSE};
                }
                
            }
        }

        p{
            color: ${({theme}) => theme.COLORS.GRAY_400};
            font-size: 16px;
            font-weight: 400;
            align-self: stretch;
        }

        ul{
            display: flex;
            gap: 8px;

            >li {
                background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
                padding: 5px 16px;
                border-radius: 10px;
            }
        }
`