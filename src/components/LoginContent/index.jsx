import styles from './styles.module.css'
import {Link} from 'react-router-dom';
import sete from '../../assets/img-700x700.jpg'

function LoginContent () {
  return(
    <div>

      <div>
        <h1>
          Entrar
        </h1>
        <label htmlFor=""> E-mail</label>
        <input type="text" />
        <label htmlFor=""> Senha</label>
        <input type="text" />
        <Link to="/forgot-password">esqueceu a senha?</Link>
      </div>

      <div>
        <img src={sete} alt="foto" />
      </div>
    </div>
  );
}

export default LoginContent