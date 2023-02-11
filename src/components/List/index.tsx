import React from "react";

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
    <aside>
      <h2> Estudos do dia </h2>
      <ul>
       {
        tarefas.map((tarefa, index)=>(
          <li key={index}>
            <h3>{tarefa.tarefa}</h3>
            <span>{tarefa.tempo}</span>
          </li>
        )) 
       }
      </ul>
    </aside>
  )
}

export default List