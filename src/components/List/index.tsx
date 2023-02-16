import { Item } from './Item';
import style from './List.module.scss';

function List() {
  const tarefas = [
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
  ]

  return (
    <aside className={style.listaTarefas}>
      <h2 className={style.h2}> Estudos do dia </h2>
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