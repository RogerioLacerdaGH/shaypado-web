import { useState } from 'react'
import styles from './styles.module.css'
import Header from '../Header'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'

const HomeContent = () => {
  return (
    <div className={styles.teste}>

      <div className={styles.titleDiv}>
        <h2>
          Bem vindo, Ciclano ;)
        </h2>
      </div>

      <div className={styles.container}>
        <Link to="/list-training" className={styles.card}>
          <svg width="194" height="194" viewBox="0 0 194 194" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="97" cy="97" r="97" fill="#C2C2C2" />
          </svg>
          <h2>Gerenciar treinos</h2>
        </Link>
        <Link to="/list-class" className={styles.card}>
          <svg width="194" height="194" viewBox="0 0 194 194" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="97" cy="97" r="97" fill="#C2C2C2" />
          </svg>
          <h2>Gerenciar turmas</h2>
        </Link>
        <Link to="/list-students" className={styles.card}>
          <svg width="194" height="194" viewBox="0 0 194 194" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="97" cy="97" r="97" fill="#C2C2C2" />
          </svg>
          <h2>Gerenciar alunos</h2>
        </Link>
      </div>

    </div>
  )
}

export default HomeContent