import { Header } from "../../components/Memory/Header/Header";
import { GridHardLevel } from "../../components/MemoryHardLevel/Grid";
import { cards } from "../../data/memoryHardLevel";
import "./MemoryHardLevel.scss"


export function MemoryHardLevel() {
  return(
    <div className="ScreenMemoryHardLevel">
      <Header/>
      <div className="cards-content">
        <GridHardLevel card={cards}/>
      </div>
    </div>
  )
}