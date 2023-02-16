import style from './Item.module.scss';

interface IItem {
  tarefa: string,
  tempo: string  
}

export function Item({ tarefa, tempo }:IItem) {
  return (
    <li className={style.item} >
      <h3 className={style.h3}>{tarefa}</h3>
      <span className={style.span}>{tempo}</span>
    </li>
  )
}

