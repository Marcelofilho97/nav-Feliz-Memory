import { Header } from '../../components/Memory/Header/Header'
import { Main } from '../../components/Memory/Main/Main'
import './Memory.scss'

export function Memory (){
  return (
    <div className='initialMemoryScreen'>
      <Header/>
      <Main/>
    </div>
  )
}