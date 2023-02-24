import { useState } from 'react';
import { Chronometer } from "../components/Chronometer";
import Form from "../components/Form";
import List from "../components/List";
import { ITarefa } from '../types/tarefa';

import style from './App.module.scss';

function App() {

  const [tarefas, setTarefas] = useState<ITarefa[] | []>([]);

  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas}/>
      <List tarefas={tarefas} />
      <Chronometer />
    </div>
  );
}

export default App;
