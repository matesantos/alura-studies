import React, { Component, ReactNode } from "react";
import style from './Button.module.scss';

interface IButton {
  children: ReactNode;
}

class Button extends Component<IButton> {
  render(): React.ReactNode {
    return (
      <button className={style.botao}>
        {this.props.children}
      </button>
    )
  }
}

export default Button;