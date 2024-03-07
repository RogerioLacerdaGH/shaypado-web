import perfil from '../../assets/profire-300x300.png';
import React, { useState } from 'react';
import styles from './styles.module.css';

const StudentCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const names = ["aluno1", "aluno2", "aluno3", "aluno4", "aluno5", "aluno6", "aluno7"];

  const handleNext = () => {
    if (currentIndex < names.length - 1) {
      setCurrentIndex(prevIndex => prevIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevIndex => prevIndex - 1);
    }
  };

  const canGoNext = currentIndex < names.length - 4;
  const canGoPrevious = currentIndex > 0;

  const renderStudents = () => {
    const currentNames = names.slice(currentIndex, currentIndex + 4);
    return currentNames.map((name, index) => (
      <div key={index} className={styles.card}>
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="100" fill="#C2C2C2" />
        </svg>
        <h2>{name}</h2>
      </div>
    ));
  };

  return (
    <div className={styles.cardList}>
      <div className={styles.cardsContainer}>{renderStudents()}</div>
      <div className="controls">
        <button onClick={handlePrevious} disabled={!canGoPrevious}>Anterior</button>
        <button onClick={handleNext} disabled={!canGoNext}>Próximo</button>
      </div>
    </div>
  );
};

export default StudentCards;