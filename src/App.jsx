import './App.css'
import { Local } from './svgs/Local'
import { Calendario } from './svgs/calendario'

function App() {

  const presentesDoQuarto = [
    'colchas de cama (cores- preto, azul,cinza)',
    '3 Edredom',
    'Cortina preta ou cinza',
    'Kit toalha',
    'Ar condicionado',
    'Ventilador',
    'Cama'
  ]

  const presentesDaSala = [
    'Mesa de centro',
    'Carpete',
    'Raque para tv'
  ]

  const presentesDaCozinha = [
    'airfryer',
    'geladeira',
    'Jogo de Talher preto',
    'Jogo de Pratos branco',
    'Jogo de copos de vidro',
    'Jarra',
    'Travessa de vidro',
    'Kit de tijela de plástico preta, branca',
    'Jogo de panela preta',
    'Panela de pressão',
    'Frigideira',
    'Jogo de conchas de madeira',
    'Kit de facas preta',
    'Tábua de corte',
    'Ralador de inox preto',
    'Panos de prato',
    'Cesto de lixo preto' 
  ]

  return (
    <main>
      
      <div className='container'>
        <h1 id='title'>Yure & Andressa</h1>
        <p className='text'>&#34; PARA QUE VEJAM. SAIBAM, CONSIDEREM, E COMPREENDAM QUE A MÃO DO SENHOR FEZ ISSO.&#34;
 ISAIAS 41:20</p>
      </div>

      <img src="./yure-andressa.jpg" alt="Foto dos noivos" />

      <div className='container2'>
        <h2 className='subtitle'>CONVIDAMOS VOCÊ PARA COMPARTILHAR ESSE SONHO CONOSCO , SERÁ UM PRAZER COMPARTILHAR COM VOCÊS ESTE DIA TÃO IMPORTANTE EM NOSSAS VIDAS!</h2>
        <div className='infos'>
          <div className='info-item'>
            <Calendario />
            <p className='bold2' >31/08/2024</p>
          </div>
          <div className='info-item'>
            <Local />
            <p className='bold2'>Chácara do alegria</p>
          </div>
        </div>
      </div>

      <div className='container3'>
      <p>Criamos esse site para compartilhar com vocês os detalhes do nosso casamento.
Estamos muito felizes e contamos com a presença de todos nesse dia tão especial 
É muito importante também confirmar sua presença. Para isto contamos com sua ajuda clicando no botão <span id='bold'>&#34;Confirme sua Presença&#34;</span> e preenchendo os dados necessários.
Para nos presentear, escolha qualquer item da Lista de Casamento ou qualquer outra coisa que sentir no coração.
Fiquem à vontade!
Aguardamos vocês no nosso grande dia!</p>

  
    <a target='_blank' className='button' href="https://api.whatsapp.com/send/?phone=559484319772&text=Gostaria+de+confirmar+minha+presenca+no+seu+casamento!&type=phone_number&app_absent=0">
      Confirme sua presença!
    </a>

    <h2 className=''>Nosso enxoval para a casa nova será nos tons de bambu, preto e branco</h2>
      </div>

    <div className='container2'>
      <h2 className='subtitle'>Lista de presentes chá de casa nova</h2>
      <h3 className='grupo-de-presente'>Quarto</h3>
      {presentesDoQuarto.map((presente) => {
        return(
          <p className='presente-item' key={presente}>{presente}</p>
        )
      })}

      <h3 className='grupo-de-presente'>Sala</h3>
      {presentesDaSala.map((presente) => {
        return(
          <p className='presente-item' key={presente}>{presente}</p>
        )
      })}

      <h3 className='grupo-de-presente'>Cozinha</h3>

      {presentesDaCozinha.map((presente) => {
        return(
          <p className='presente-item' key={presente}>{presente}</p>
        )
      })}

      <h3 className='grupo-de-presente'>Banheiro</h3>
      <p className='presente-item'>Cesto de lixo preto</p>

      <a style={{marginBottom: '64px'}} target='_blank' className='button' href="https://api.whatsapp.com/send/?phone=559484319772&text=Gostaria+de+presentear+vocês+com&type=phone_number&app_absent=0">
      Gostaria de presentear vcs!
      </a>

    </div>

    </main>

    
  )
}

export default App
