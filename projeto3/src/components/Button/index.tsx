import { ButtonContainer } from "./styles";

interface ButtonProps {
  variant: string;
  label: string;
  onClick?: () => void;
  icon?: JSX.Element;
  type?: "button" | "submit" | "reset";
}

export function Button({ variant, label, icon, type, ...rest }: ButtonProps) {
  return (
    <div>
      <ButtonContainer variant={variant} {...rest} type={type}>
        <span>
          {icon} {label}
        </span>
      </ButtonContainer>
    </div>
  );
}
