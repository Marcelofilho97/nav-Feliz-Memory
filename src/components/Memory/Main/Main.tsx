import './Main.scss'
import SpeechBubble02 from '../../../assets/Memory/speechBubble02.png'
import Girl02 from '../../../assets/Memory/Cards/menina3.png'
import BtnEscolherJogo from '../../../assets/Memory/BtnEscolherJogo.png'
import { Link } from 'react-router-dom'

export function Main (){
  return(
    <>
    <div className="Container">
      <div className="DashboardLevel">
      <ul>
        <li>
          <Link className="btn" type="submit" to={'/MemoryEasyLevel'}> 
          Fácil
          </Link>
        </li>

        <li>
          <Link className="btn" type="submit" to={'/MemoryMediumLevel'}>  
          Médio
          </Link>
        </li>

        <li>
            <Link className="btn" type="submit" to={'/MemoryHardLevel'}> 
            Difícil
            </Link>
        </li>

        <li>
          <Link className="BtnEscolherJogo" type="submit" to={'/'}>
            <img src={BtnEscolherJogo} alt="Botão para escolher jogo" />
          </Link>
        </li>
      </ul>
      </div>
      <div className='SpeechButton'>
      <img className='SpeechBubble02' src={SpeechBubble02} alt="Balão de fala da personagem" />
      <p className='TextSpeech'>
        Você terá alguns segundos para memorizar as figuras 
      </p>
      </div>
      <img className='Girl02' src={Girl02} alt="Personagem menina 2 (dois)" />
    </div>
    </>
  )
}


