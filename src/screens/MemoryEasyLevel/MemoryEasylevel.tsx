import { Header } from "../../components/Memory/Header/Header";
import { Grid } from "../../components/MemoryEasyLevel/Grid";
import { cards } from "../../data/memoryEasyCards";
import "./MemoryEasyLevel.scss";


export function MemoryEasyLevel(){
  return(
    <div className="ScreenMemoryEasyLevel">
      <Header/>
      <div className="cards-content">
        <Grid card={cards}  />
      </div>
      
    </div>
  )
}