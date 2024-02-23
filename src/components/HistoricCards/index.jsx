import styles from "./styles.module.css"
import historicoIcon from "../../assets/historico.png"

const HistoricCards = () =>{
  const datasAlteracoes = ["01/10/2023","14/11/2023","27/11/2023","15/12/2023"]
    return(
    <div className={styles.all}>
      {datasAlteracoes.map( (data) => (
        <div>
          <img src={historicoIcon} alt="data" />
          <h3>{data}</h3>
      </div>
      ))}
    </div>
  );
}

export default HistoricCards