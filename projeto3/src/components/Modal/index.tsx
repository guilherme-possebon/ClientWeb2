import { EyeStyled, ModalContainer, ModalContent, XStyled } from "./styles";
import { BadgeType } from "../../enum/badgeEnum";
import { Button } from "../Button";

interface ModalProps {
  color: BadgeType;
  children: React.ReactNode;
  icon?: boolean;
  label?: string;
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
}

export function Modal({
  color,
  children,
  icon,
  label,
  setIsOpen,
  isOpen,
}: ModalProps) {
  return (
    <>
      {icon ? (
        <EyeStyled size={24} onClick={() => setIsOpen(!isOpen)} />
      ) : (
        <Button
          variant="blue"
          label={label ? label : "Open Modal"}
          onClick={() => setIsOpen(!isOpen)}
        />
      )}

      {isOpen && (
        <ModalContainer>
          <ModalContent color={color}>
            <XStyled onClick={() => setIsOpen(!isOpen)} />
            {children}
          </ModalContent>
        </ModalContainer>
      )}
    </>
  );
}
