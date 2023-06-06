import { Header } from "../../components/Memory/Header/Header"
import { GridMediumLevel } from "../../components/MemoryMediumLevel/Grid"
import { cards } from "../../data/memoryMediumLevel"
import "./MemoryMediumLevel.scss"


export function MemoryMediumLevel(){
  return (
    <div className="ScreenMemoryMediumLevel">
      <Header/>
      <div className="cards-content">
        <GridMediumLevel  card={cards}/>
      </div>
    </div>
  )
}