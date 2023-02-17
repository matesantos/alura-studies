import { useState } from 'react'
import { Item } from './Item';
import style from './List.module.scss';

function List() {
  const [tarefas, setTarefas] = useState([
    {
      tarefa: 'React',
      tempo: '02:00:00'
    }, 
    {
      tarefa: 'Javascript',
      tempo: '01:00:00'
    }, 
    {
      tarefa: 'Typescript',
      tempo: '01:30:00'
    }
  ]);

  return (
    <aside className={style.listaTarefas}>
      <h2 onClick={()=> setTarefas([...tarefas, {tarefa: 'Use State', tempo:'05:00:00'}])}
      className={style.h2}> Estudos do dia </h2>
      <ul className={style.ul}>
       {
        tarefas.map((tarefa, index)=>(
          <Item {...tarefa} key={index} />
        )) 
       }
      </ul>
    </aside>
  )
}

export default List