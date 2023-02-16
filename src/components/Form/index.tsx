import React, { Component } from "react";
import Button from "../Button";

import style from './Form.module.scss';

class Form extends Component {
  render(): React.ReactNode {
    return(
      <form className={style.novaTarefa}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa" className={style.label}>Adicione um novo estudo</label>
          <input 
            type="text" 
            id="tarefa" 
            name="tarefa" 
            placeholder="O que você quer estudar?" 
            required
            className={style.input}
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo" className={style.label}>Tempo</label>
          <input type="time"
            step="1"
            id="tempo"
            name="tempo"
            min="00:00:00"
            max="01:30:00"
            required
            className={style.input}
          />
        </div>
        <Button>
          Adicionar
        </Button>
      </form>
    )
  }
}

export default Form;