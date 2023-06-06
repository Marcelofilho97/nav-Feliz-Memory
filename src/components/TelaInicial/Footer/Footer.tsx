import MemoryLogo from '../../../assets/TelaInicial/memoryLogo.png'
import QuadrinhosLogo from '../../../assets/TelaInicial/quadrinhosLogo.png' //trocar o nome da importação posteriormente
import PaintLogo from '../../../assets/TelaInicial/pinturaLogo.png'
import { Link } from 'react-router-dom'
import './Footer.scss'

export function Footer(){
  return (
    <>
    <div className="dashboard">
      <ul>
        <li>
          <img src={QuadrinhosLogo} alt="Logo do módulo de Quadrinhos" />
          <Link className="btn" type="submit" to={'/'}> 
          QUADRINHOS 
          </Link>
        </li>

        <li>
          <img src={PaintLogo} alt="Logo do módulo de Pintura" />
          <Link className="btn" type="submit" to={'/'}> 
          VAMOS PINTAR 
          </Link>
        </li>

        <li>
            <img src={MemoryLogo} alt="Logo do módulo do Jogo da Memória" />
            <Link className="btn" type="submit" to={'/Memoria'}> 
            MEMÓRIA
            </Link>
        </li>
      </ul>
    </div>
    </>
  )
}