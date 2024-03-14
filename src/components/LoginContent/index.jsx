import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import sete from '../../assets/img-700x700.png';
import useAuth from '../../hooks/useAuth.jsx'; // Importe o hook useAuth

function LoginContent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signin } = useAuth(); //hook
  const navigate = useNavigate();
  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = () => {
    setIsFormValid(email.trim() !== '' && password.trim() !== ''); // Verifica se os campos não estão vazios
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Chame a função signin com o email e a senha fornecidos
      await signin(email, password);
      navigate('/home')
      // Você pode usar o useHistory hook do react-router-dom para redirecionar o usuário
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      // Trate o erro de login aqui, como exibir uma mensagem de erro para o usuário
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginContainer}>
        <h1>Entrar</h1>
        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <div className={styles.gap}>
            <div className={styles.inputGroup}>
              <label htmlFor="email">E-mail</label>
              <input
                type="text"
                id="email"
                placeholder="Insira seu e-mail"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  validateForm(); // Chama a validação sempre que o valor do campo de e-mail mudar
                }}
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                id="password"
                placeholder="Insira sua senha"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  validateForm(); // Chama a validação sempre que o valor do campo de senha mudar
                }}
              />
            </div>
          </div>
          <div className={styles.forgotPassword}>
            <Link to="/forgot-password">Esqueceu a senha?</Link>
          </div>
          <div className={styles.flex}>
            <button type="submit" className={styles.loginBtn} disabled={!isFormValid}>Login</button>
            <Link className={styles.downloadBtn} to="/home">Cadastre-se</Link>
          </div>
        </form>
      </div>
      <div className={styles.imgDiv}>
        <img src={sete} alt="img" />
      </div>
    </div>
  );
}

export default LoginContent;
