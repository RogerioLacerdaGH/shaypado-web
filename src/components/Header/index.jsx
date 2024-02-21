import styles from './styles.module.css'
import {Link} from 'react-router-dom';

const Header = () =>{
  return (
    <div className={styles.headerAll}>
       <Link to="/home"><h1>Home</h1></Link>
       <Link to="/login"><h1>Login</h1></Link>
       <Link to="/"><h1>ladingpage</h1></Link>
    </div>
  );
}

export default Header;