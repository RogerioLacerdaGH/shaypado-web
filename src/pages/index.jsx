import styles from './styles.module.css'
import { Link } from 'react-router-dom';
import sete from '../assets/img-700x700.jpg';
import quatro from '../assets/img-450x450.png';
import Header from '../components/Header';

const LadingPage = () => {
  return (
    <>
      <div className={styles.page}>
        <div className={styles.every}>
          <Header />
          <section className={styles.firstSection}>

            <div className={styles.container}>
              <div className={styles.infoContainer}>
                <h1>SHAYPADO</h1>
                <p>Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div className={styles.flex}>
                  <Link className={styles.downloadBtn} to="/home">Baixe o app</Link>
                  <Link className={styles.loginBtn} to="/login">Login</Link>
                </div>

              </div>
              <div className={styles.imgDiv}>
                <img src={sete} alt="img" />
              </div>
            </div>

          </section>
          <section className={styles.secondSection}>

            <div className={styles.container}>
              <img src={quatro} alt="foto 1" />
              <img src={quatro} alt="foto 2" />
              <img src={quatro} alt="foto 3" />
            </div>

            <div className={styles.container}>
              <div>
                <img src={sete} alt="fotão" />
              </div>
              <div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
              </div>
            </div>

            <div className={styles.container}>
              <div>
                <img src={sete} alt="fotão" />
              </div>
              <div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              </div>
            </div>

            <div className={styles.container}>
              <a href="">
                baixe o app
              </a>
            </div>

          </section>

          <footer>
            algumas infos do roda pé
          </footer>
        </div>
      </div>
    </>
  );
}

export default LadingPage