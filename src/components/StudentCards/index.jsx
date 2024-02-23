import styles from "./styles.module.css"
import perfil from "../../assets/profire-300x300.png"

const StudentCards = () =>{
  const nomeAlunos = ["aluno1","aluno2","aluno3","aluno4"]
    return(
    <div className={styles.all}>
      {nomeAlunos.map( (aluno) => (
        <div>
          <img src={perfil} alt="aluno" />
          <h3>{aluno}</h3>
      </div>
      ))}
    </div>
  );
}

export default StudentCards