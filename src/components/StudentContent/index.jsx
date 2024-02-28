import ExampleGraph from '../ExampleGraph';
import styles from './styles.module.css';

const StudentContent = () => {
  const tamanho = {
    x: 200,
    y: 300,
  }
  const tamanhoDois = {
    x: 400,
    y: 300,
  }
  return (
    <div>
      <div className={styles.flex}>
        <div>
          <h3>intervalo de tempo: ???</h3>
        </div>
        <div>
          <h3>medida: 10cm</h3>
        </div>
      </div>
      <div className={styles.flex}>
        <div>
          <ExampleGraph tamanhoX={tamanho.x} tamanhoY={tamanho.y} />
        </div>
        <div>
          <ExampleGraph tamanhoX={tamanho.x} tamanhoY={tamanho.y} />
        </div>
      </div>
      <div>
        <ExampleGraph tamanhoX={tamanhoDois.x} tamanhoY={tamanhoDois.y} />
      </div>
    </div>
  )
}

export default StudentContent