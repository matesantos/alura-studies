import React, { Component, ReactNode } from "react";
import style from './Button.module.scss';

interface IButton {
  type?: "button" | "submit" | "reset" | undefined,
  children?: ReactNode;
}

class Button extends Component<IButton> {

  render(): React.ReactNode {
  const { type = "button" } = this.props;
    return (
      <button type={type} className={style.botao}>
        {this.props.children}
      </button>
    )
  }
}

export default Button;