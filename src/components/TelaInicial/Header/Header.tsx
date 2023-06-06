import LogoNavegaFeliz from '../../../assets/TelaInicial/logo.png'
import './Header.scss'

export function Header(){
    return(
      <>
        <header className='HeaderInitialScreen'>
          <img className='HeaderImageInitialScreen'src={LogoNavegaFeliz} alt="Logo do projeto NavegaFeliz"/>
        </header>
      </>
    )
}