import './TelaInicial.scss' 
import { Header } from '../../components/TelaInicial/Header/Header'
import { Main } from '../../components/TelaInicial/Main/Main'
import { Footer } from '../../components/TelaInicial/Footer/Footer'
//import LogoNavegaFeliz from '../../assets/TelaInicial/logo.png'
//import Background from '../../assets/TelaInicial/bg-telaInicial.jpg'

export function TelaInicial(){
  return(
    <div className='initialScreen-bg'>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}
