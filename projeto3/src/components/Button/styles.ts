import styled from 'styled-components';

interface ButtonContainerProps {
  variant: string;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    background-color: ${(props) => props.theme['dragon']};
    border: none;
    color: white;
    padding: 15px 32px;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;

    & span {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
`