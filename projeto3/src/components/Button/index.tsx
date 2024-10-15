import { ButtonContainer } from "./styles";

interface ButtonProps {
  variant: string;
  label: string;
}

export function Button({ variant, label }: ButtonProps) {
  return (
    <div>
      <ButtonContainer variant={variant}>{label}</ButtonContainer>
    </div>
  );
}
