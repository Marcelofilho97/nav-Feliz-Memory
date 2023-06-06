import { useRef, useState } from "react"
import {Card, CardProps} from "../Card"
import "./styles.scss"
import { duplicateRegenerateSortArrayHardLevel } from "../../../utils/cardsHard-utils"
import {Link} from "react-router-dom"


export interface GridPropsHardLevel {
  card: CardProps[]
}

export function GridHardLevel ({card}: GridPropsHardLevel){

  const [stateCards, setStateCards] = useState(() =>{
    return duplicateRegenerateSortArrayHardLevel(card)
  })
  const first = useRef<CardProps | null>(null)
  const second = useRef<CardProps | null>(null)
  const unflip = useRef(false)

  // No início do jogo mostra a posição dos cards por um determinado tempo
  // duração de 3 segundos
  const handleStart = () => {
    const initialOfGame = stateCards.map(card => {
      card.flipped = true
      return card  
    })
    setStateCards(initialOfGame)

    setTimeout(() => {
      const initialOfGameContinue = stateCards.map(card => {
        card.flipped = false
        return card
      })
      setStateCards(initialOfGameContinue)
    }, 1000)
  }

  //função para reset do jogo e fazer novo sorteio dos cards
  const handleReset = () => {
    if(window.confirm("Deseja começar um novo jogo?")) {
      setStateCards(duplicateRegenerateSortArrayHardLevel(card))
      first.current = null
      second.current = null
      unflip.current = false
    }
  }

  /*
  função para clicar nas cartas e caso estejam corretas permanecem viradas
  senão são desviradas e o jogo continua
  */
  const handleClick = (id: string) => {
    const newStateCards = stateCards.map((card) => {
      //se o id do cartão não for o id clicado, não faz nada
      if(card.id !== id) return card
      //se o cartão já estiver virado não faz nada
      if(card.flipped === true) return card

      //configura primeiro e segundo cartão clicados 
      if (first.current === null){
        //virar card
        card.flipped = true
        first.current = card
      } else if (second.current === null){
        //virar card
        card.flipped = true
        second.current = card
      } else {
        return card
      }

      //se eu tenho os dois cards virados
      //checar se estão corretos
      if(first.current && second.current) {
        if(first.current.back === second.current.back) {
          // a pessoa acertou
          first.current = null
          second.current = null
        } else {
          //a pessoa errou
          unflip.current = true
          //desviro de cartas erradas

          setTimeout(() =>{
            const errorCards = newStateCards.map(card => {
              if(unflip.current && first.current && second.current) {
                first.current.flipped = false
                second.current.flipped = false
                first.current = null
                second.current = null
                unflip.current = true
              }
              return card
            })
            setStateCards(errorCards)
          }, 800)
        }
      }
      return card
    })
    setStateCards(newStateCards)
  }

  return(
    <>
    <div className="gridHardLevel" onLoad={handleStart}>
    {
      stateCards.map((card) => {
        return <Card {...card} key={card.id} handleClick={handleClick}/>
      })
    }
    </div>
    <div className="ResetButtonHard">
      <button className="NewGame" onClick={handleReset}> Começar novo jogo</button>
    </div>
    <div className="SelectAnotherLevelHard">
      <Link className="ChangeLevel" to={"/Memoria"}>
      Escolha outro nível
      </Link>
    </div>
    </>
  )

}