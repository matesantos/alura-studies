import { ReactNode } from "react";
import style from './Button.module.scss';

interface IButton {
  type?: "button" | "submit" | "reset" | undefined,
  onClick?: () => void,
  children?: ReactNode;
}

function Button({ type, children, onClick }: IButton) {
  return (
    <button onClick={onClick} type={type} className={style.botao}>
      {children}
    </button>
  )
}

export default Button;