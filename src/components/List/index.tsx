import { ITarefa } from '../../types/tarefa';
import { Item } from './Item';
import style from './List.module.scss';

interface IList {
  tarefas: ITarefa[],
  selecionaTarefa: (tarefas: ITarefa) => void;
}

function List( {tarefas, selecionaTarefa}: IList) {
  
  return (
    <aside className={style.listaTarefas}>
      <h2 className={style.h2}> Estudos do dia </h2>
      <ul className={style.ul}>
       {
        tarefas.map(tarefa =>(
          <Item 
            {...tarefa} 
            key={tarefa.id} 
            selecionaTarefa={selecionaTarefa}
          />
        )) 
       }
      </ul>
    </aside>
  )
}

export default List;