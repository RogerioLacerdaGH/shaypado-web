import styles from "./styles.module.css"
import turmaIcon from "../../assets/turma.png"

const ClassCards = () =>{
  const nomeTurmas = ["turma 1","turma2","turma3","turma4"]
    return(
    <div className={styles.all}>
      {nomeTurmas.map( (turma) => (
        <div>
          <img src={turmaIcon} alt="turma" />
          <h3>{turma}</h3>
      </div>
      ))}
    </div>
  );
}

export default ClassCards