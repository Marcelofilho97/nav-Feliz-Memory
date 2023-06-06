import { useRef, useState } from "react";
import { Card, CardProps } from "../Card";
import "./styles.scss"
import { duplicateRegenerateSortArray } from "../../../utils/cardsEasy-utils"
import { Link } from "react-router-dom";


export interface GridProps{
  card: CardProps[]
}

export function Grid ({card}: GridProps){

  const [stateCards, setStateCards] = useState(() => {
    return duplicateRegenerateSortArray(card);
  });
  const first = useRef<CardProps | null >(null);
  const second = useRef<CardProps | null>(null);
  const unflip = useRef(false);

  // No início do jogo mostra a posição dos cards por um determinado tempo
  // duração de 5 segundos 
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
        //mensagem de teste para verificar se estava funcionando
        //console.log("card false")
      }, 5000)
  }

  
  //função para reset do jogo e fazer novo sorteio dos cards 
  const handleReset = () => {
    if(window.confirm("Deseja começar um novo jogo?")) {
      setStateCards(duplicateRegenerateSortArray(card))
      first.current = null
      second.current = null
      unflip.current = false
    }
  }

  /*
  função para clicar nas cartas e caso estejam corretas permanecem viradas
  senão voltam são desviradas e o jogo continua. 
  */
  const handleClick = (id: string) => {
    const newStateCards = stateCards.map((card) => {
      // Se o id do cartão não for o id clicado, não faz nada
      if (card.id !== id) return card;
      // Se o cartão já estiver virado, não faz nada
      if (card.flipped === true) return card;
     
      // Configura primeiro e segundo cartão clicados
      if (first.current === null) {
        // Virar card
        card.flipped = true
        first.current = card;
      } else if (second.current === null) {
        // Virar card
        card.flipped = true
        second.current = card;
      } else {
        return card
      }
      // Se eu tenho os dois cartão virados
      // Posso checar se estão corretos
      if (first.current && second.current) {
        if (first.current.back === second.current.back) {
          // A pessoa acertou
          first.current = null;
          second.current = null;
        } else {
          // A pessoa errou
          unflip.current = true
          // Desviro de cartas erradas
            setTimeout(() => {
              const errorCards = newStateCards.map(card => {
                if (unflip.current && first.current && second.current) {    
                  first.current.flipped = false;
                  second.current.flipped = false;
                  first.current = null;
                  second.current = null;
                  unflip.current = true;
              } 
              return card
              })
              setStateCards(errorCards);
              //console.log("error")
            }, 2000)
        }
      }
      return card;
    });
    setStateCards(newStateCards);
  }

  return(
    <>
    <div className="grid" onLoad={handleStart}>
    {
      stateCards.map((card) => {
        return <Card {...card} key={card.id} handleClick={handleClick}/>
      })
    }
    </div>
    <div className="ResetButtonEasy">
      <button className="NewGame" onClick={handleReset}> Começar novo jogo </button>
    </div>
    <div className="SelectAnotherLevelEasy">
      <Link className="ChangeLevel" to={"/Memoria"}>
        Escolha outro nível
      </Link>
    </div>
    </>
  )
}