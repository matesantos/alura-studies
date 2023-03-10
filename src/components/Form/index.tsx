import React, { useState, FormEvent, Dispatch, SetStateAction } from "react";
import { v4 as uuidv4 } from 'uuid';
import { ITarefa } from "../../types/tarefa";
import Button from "../Button";

import style from './Form.module.scss';

interface Props {
  setTarefas: Dispatch<SetStateAction<ITarefa[]>>
}

function Form({ setTarefas }: Props) {

  const [state, setState] = useState({
    tarefa: "",
    tempo: '00:00'
  })


  function addTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTarefas(
      tarefasAntigas =>
        [
          ...tarefasAntigas,
          {
            ...state,
            selecionado: false,
            completado: false,
            id: uuidv4()
          }
        ]
    );
    setState({
      tarefa: "",
      tempo: '00:00'
    })
  }

  return (
    <form className={style.novaTarefa} onSubmit={evt => addTask(evt)}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa" className={style.label}>Adicione um novo estudo</label>
        <input
          type="text"
          id="tarefa"
          name="tarefa"
          value={state.tarefa}
          onChange={event => setState({ ...state, tarefa: event.target.value })}
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
          value={state.tempo}
          onChange={event => setState({ ...state, tempo: event.target.value })}
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

export default Form;