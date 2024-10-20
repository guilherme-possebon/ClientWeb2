import { Eye, X } from "@phosphor-icons/react";
import styled from "styled-components";

interface ModalContentProps {
  color: string;
}

export const EyeStyled = styled(Eye)`
  color: ${(props) => props.theme["gray-900"]};
  cursor: pointer;
`;

export const XStyled = styled(X)`
  color: ${(props) => props.theme["gray-900"]};
  position: absolute;
  top: 10px;
  right: 10px;

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme["red-700"]};
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(3px);
  z-index: 999;

  & button {
    background-color: ${(props) => props.theme["gray-900"]};
  }
`;

export const ModalContent = styled.div<ModalContentProps>`
  background-color: ${(props) => props.theme[props.color]};
  padding: 20px;
  border-radius: 5px;
  width: 50%;
  min-width: 300px;
  max-width: 800px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
  color: ${(props) => props.theme["gray-900"]};
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Infos = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const Abilitys = styled.div`
  text-transform: capitalize;
  color: ${(props) => props.theme["gray-900"]};
  font-size: 1rem;
  font-weight: bold;
`;

export const AbilityContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Images = styled.img`
  height: 300px;
  width: 300px;
  transition: transform 0.5s;

  &:hover {
    transform: scale(1.15);
  }
`;
