import React, { Component, FormEvent } from "react";
import Button from "../Button";

import style from './Form.module.scss';

class Form extends Component {

  state = {
    tarefa: "",
    tempo:'00:00'
  }

  addTask(event: FormEvent<HTMLFormElement>){
    event.preventDefault();
    console.log(this.state)
  }

  render(): React.ReactNode {
    return(
      <form className={style.novaTarefa} onSubmit={this.addTask.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa" className={style.label}>Adicione um novo estudo</label>
          <input 
            type="text" 
            id="tarefa" 
            name="tarefa"
            value={this.state.tarefa}
            onChange = {event => this.setState({ ...this.state, tarefa: event.target.value })}
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
            value={this.state.tempo}
            onChange={event => this.setState({...this.state, tempo: event.target.value })}
            min="00:00:00"
            max="05:30:00"
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