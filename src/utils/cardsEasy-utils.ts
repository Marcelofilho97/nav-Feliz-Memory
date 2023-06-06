import { CardProps } from "../components/MemoryEasyLevel/Card"

const keyGenerator = (): string => {
  return(
    Math.random().toString(36).substring(2, 15) + 
    Math.random().toString(36).substring(2, 15)
  )
}

//duplicar o "array nele mesmo"
export const duplicateArray = <T>(array: T[]): T[] => {
  return array.concat(array)
}

//posição aleatória dos cards
export const sortArray = <T>(array: T[]): T[] => {
  return array.sort(() => Math.random() - 0.5)
}

//regenerar os cards
export const regenerateCard = (card: CardProps[]): CardProps[] => {
  return card.map((card) => ({...card, id:keyGenerator()}))
}

export const duplicateRegenerateSortArray = (card: CardProps[]): CardProps[] => {
  return sortArray(regenerateCard(duplicateArray(card)))
}

