import styles from './styles.module.css'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div className={styles.barra}>.</div>
      <div className={styles.headerAll}>
        <div className={styles.logo}>
          <Link to="/home"><h1>Home</h1></Link>
        </div>
        <div className={styles.flex}>
          <Link to="/login"><h1>Login</h1></Link>
          <Link to="/"><h1>ladingpage</h1></Link>
        </div>
      </div>
    </div>
  );
}

export default Header;