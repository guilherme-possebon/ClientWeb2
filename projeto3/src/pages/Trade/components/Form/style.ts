import styled from "styled-components";

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;

    & div {
        display: flex;
        justify-content: center;
        flex-direction: column;

        & span {
            display: flex;
            gap: 10px;
        }
    }
    
    & input {
        padding: 10px;
        border: 1px solid ${(props) => props.theme["gray"]};
        border-radius: 5px;
    }

    & select {
        padding: 10px;
        border: 1px solid ${(props) => props.theme["gray"]};
        border-radius: 5px;
    }

    & div {
        display: flex;
        justify-content: center;
    }
`