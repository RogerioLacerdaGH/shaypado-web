import styles from "./styles.module.css"
import perfil from "../../assets/profire-300x300.png"

const StudentCards = () =>{
  return(
    <div className={styles.all}>
      <div>
        <img src={perfil} alt="perfil" />
        <h3>Nome do cara</h3>
      </div>
      <div>
        <img src={perfil} alt="perfil" />
        <h3>Nome do cara</h3>
      </div>
      <div>
        <img src={perfil} alt="perfil" />
        <h3>Nome do cara</h3>
      </div>
      <div>
        <img src={perfil} alt="perfil" />
        <h3>Nome do cara</h3>
      </div>
    </div>
  );
}

export default StudentCards