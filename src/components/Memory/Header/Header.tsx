import HeaderMemory from '../../../assets/Memory/header.png'
import './Header.scss'

export function Header(){
  return(
    <>
      <header className='HeaderMemoryGame'>
        <img className='HeaderMemoryImage' src={HeaderMemory} alt="Cabeçalho do módulo de jogo da memória" />
      </header>
    </>
  )
}