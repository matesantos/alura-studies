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
          <li className={style.item} key={index}>
            <h3 className={style.h3}>{tarefa.tarefa}</h3>
            <span className={style.span}>{tarefa.tempo}</span>
          </li>
        )) 
       }
      </ul>
    </aside>
  )
}

export default List