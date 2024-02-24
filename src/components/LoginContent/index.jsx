import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import sete from '../../assets/img-700x700.jpg';

function LoginContent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginContainer}>
        <h1>Entrar</h1>
        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">E-mail</label>
            <input
              type="text"
              id="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={styles.forgotPassword}>
            <Link to="/forgot-password">Esqueceu a senha?</Link>
          </div>
          <Link to={"/home"}>
          <button type="submit" className={styles.loginButton}>
            Login
          </button>
          </Link>
        </form>
      </div>
      <div className={styles.imageContainer}>
        <img src={sete} alt="Foto" />
      </div>
    </div>
  );
}

export default LoginContent;
