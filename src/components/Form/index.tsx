import React, { Component, FormEvent, Dispatch, SetStateAction } from "react";
import { ITarefa } from "../../types/tarefa";
import Button from "../Button";

import style from './Form.module.scss';

class Form extends Component<{
  setTarefas: Dispatch<SetStateAction<ITarefa[]>>
}> {

  state = {
    tarefa: "",
    tempo:'00:00'
  }

  addTask(event: FormEvent<HTMLFormElement>){
    event.preventDefault();
    this.props.setTarefas(tarefasAntigas =>[...tarefasAntigas, { ...this.state }] );
    this.setState({
      tarefa: "",
      tempo:'00:00'
    })
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
        <Button type="submit">
          Adicionar
        </Button>
      </form>
    )
  }
}

export default Form;