import { ITarefa } from '../../../types/tarefa';
import style from './Item.module.scss';

interface Props extends ITarefa {
  selecionaTarefa: (tarefa: ITarefa) => void
}
      
export function Item({ 
  tarefa, 
  tempo, 
  completado, 
  id, 
  selecionado, 
  selecionaTarefa 
}: Props) {
  return (
    <li 
      className={`
        ${style.item} ${selecionado ? style.itemSelecionado : ''}
        ${completado ? style.itemCompletado : ''}
        ` } 
      onClick={() => !completado && selecionaTarefa(
        {
          tarefa,
          tempo,
          selecionado,
          completado,
          id
        }
      )} >
      <h3 className={style.h3}>{tarefa}</h3>
      <span className={style.span}>{tempo}</span>
      {completado && <span className={style.concluido} aria-label="tarefa completada"></span>}
    </li>
  )
}

