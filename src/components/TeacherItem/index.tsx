import React from 'react'

import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

function TeacherItem() {
  return(
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/42596775?s=460&u=8ddc06cf5793a75d7e7ad462ddfed52b8ef4d503&v=4" alt="Ivan Seibel"/>
        <div>
          <strong>Ivan Seibel</strong>
          <span>Chemistry</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de química avançada.
        <br/><br/>
        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200 mil pessoas já passaram por uma das minhas explosões.
      </p>

      <footer>
        <p>
          Price/hour
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Get in touch
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem