import styles from "./styles.module.css"
import treinoIcon from "../../assets/treino.png"

const TrainingCards = () =>{
  const nomeTreinos = ["treino1","treino2","treino3","treino4"]
    return(
    <div className={styles.all}>
      {nomeTreinos.map( (treino) => (
        <div>
          <img src={treinoIcon} alt="treino" />
          <h3>{treino}</h3>
      </div>
      ))}
    </div>
  );
}

export default TrainingCards