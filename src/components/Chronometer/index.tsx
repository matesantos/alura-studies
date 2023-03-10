import { useEffect, useState } from 'react';
import Button from '../Button';
import style from './Chronometer.module.scss';
import { Clock } from './Clock';
import { tempoParaSegundos } from '../../common/util/time';
import { ITarefa } from '../../types/tarefa';

interface Props {
  selecionado: ITarefa | undefined,
  finalizarTarefa: () => void
}

export function Chronometer({ selecionado, finalizarTarefa }: Props) {
  const [tempo, setTempo] = useState<number>();

  useEffect(()=> {
    selecionado?.tempo && setTempo(tempoParaSegundos(selecionado?.tempo))
  },[selecionado])

  function regressiva (contador: number = 0):void {
    setTimeout(()=>{
      if(contador > 0){
        setTempo(contador - 1);
        regressiva(contador - 1);
      }
      finalizarTarefa();
    }, 1000)
  }
  
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}> Escolha um card e inicie o cronômetro </p>
      <div className={style.relogioWrapper}>
        <Clock tempo={tempo}/>
      </div>
      <Button onClick={() => regressiva(tempo)}>
        Começar!
      </Button>
    </div>
  )
}