import { useState } from 'react'
import styles from './styles.module.css'
import Header from '../Header'
import { Link } from 'react-router-dom'

const HomeContent = () =>{
  return (
    <div className={styles.teste}>

      <div>
        <h2>
          Bem vindo "fulado"
        </h2>
      </div>

      <div>
        <div>
          <Link to="/list-students">Gerenciar alunos</Link>
        </div>
        <div>
          <Link to="/list-students">Gerenciar treinos</Link>
        </div>
        <div>
          <Link to="/list-students">Gerenciar turmas</Link>
        </div>
      </div>
    </div>
  )
}

export default HomeContent