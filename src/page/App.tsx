import { useState } from 'react';
import { Chronometer } from "../components/Chronometer";
import Form from "../components/Form";
import List from "../components/List";
import { ITarefa } from '../types/tarefa';

import style from './App.module.scss';

function App() {

  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecioanda: ITarefa):void {
    setSelecionado(tarefaSelecioanda);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecioanda.id ? true : false
    })))
  }

  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas} />
      <List tarefas={tarefas} selecionaTarefa = {selecionaTarefa} />
      <Chronometer />
    </div>
  );
}

export default App;
