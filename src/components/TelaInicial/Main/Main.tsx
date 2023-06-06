import SpeechBubble from '../../../assets/TelaInicial/speechBubble.png'
import Girl from '../../../assets/TelaInicial/img-menina.png'
import './Main.scss'

export function Main (){
  return (
    <>
      <main>
        <div className='text-container'>
          <p>
                Olá, Este é o NavegaFeliz um objeto de aprendizagem bem paraense, criado
            através do edital 22/2006 da Fapespa, com o objetivo inicial de auxiliar mulheres 
            e crianças vítimas de escalpelamento em tratamento na Fundação Santa Casa de Misericórdia
            do Pará, mas que pode ser usado por qualquer criança, jovem ou adulto que goste do nosso cenário 
            tipicamente ribeirinho, paraense, pai-d'égua.
          </p>
          <h3> Seja Bem Vindo!!!</h3>
          <img src={SpeechBubble} alt="Balão de fala da personagem" className='SpeechBubble'/>
        </div>

        <img src={Girl} alt="Menina falando sobre o projeto NavegaFeliz" className='Girl'/>
      </main>
    </>
  )
}