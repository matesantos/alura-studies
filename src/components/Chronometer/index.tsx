import Button from '../Button';
import style from './Chronometer.module.scss';
import { Clock } from './Clock';

export function Chronometer() {
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}> Escolha um card e inicie o cronômetro </p>
      <div className={style.relogioWrapper}>
        <Clock />
      </div>
      <Button>
        Começar!
      </Button>
    </div>
  )
}