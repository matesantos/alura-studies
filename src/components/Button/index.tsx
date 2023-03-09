import React, { Component, ReactNode } from "react";
import style from './Button.module.scss';

interface IButton {
  type?: "button" | "submit" | "reset" | undefined,
  onClick?: ()=> void,
  children?: ReactNode;
}

class Button extends Component<IButton> {

  render(): React.ReactNode {
  const { type = "button", onClick } = this.props;
    return (
      <button onClick={onClick} type={type} className={style.botao}>
        {this.props.children}
      </button>
    )
  }
}

export default Button;