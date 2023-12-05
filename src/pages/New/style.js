import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 112px auto;
    grid-template-areas:
    "header"
    "content";

    > main {
        grid-area: content;
        overflow-y: auto;
    }
`

export const Form = styled.form`
    max-width: 1137px;
    border: 1px solid red;
    margin: 40px auto;

    > header {
        display: flex;
        flex-direction: column;
        align-items: left;
        justify-content: center;
        gap: 24px;
    }
`;
