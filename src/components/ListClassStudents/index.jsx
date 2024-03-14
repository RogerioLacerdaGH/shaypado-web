import React from 'react';
import styles from './styles.module.css';

const ListClassStudents = () => {
  const students = [
    { nickname: 'user1', name: 'Nome Completo 1' },
    { nickname: 'user2', name: 'Nome Completo 2' },
    { nickname: 'user3', name: 'Nome Completo 3' },
    { nickname: 'user4', name: 'Nome Completo 4' },
    { nickname: 'user5', name: 'Nome Completo 5' },
    { nickname: 'user6', name: 'Nome Completo 6' },
    { nickname: 'user7', name: 'Nome Completo 7' },
    { nickname: 'user8', name: 'Nome Completo 8' },
  ];

  return (
    <div className={styles.all}>
      {students.map((student, index) => (
        <div key={index} className={styles.studentContainer}>
          <div className={styles.circle}>
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="40" cy="40" r="40" fill="#D9D9D9" />
            </svg>
          </div>
          <div>
            <h2 className={styles.nickname}>{student.nickname}</h2>
            <p className={styles.fullname}>{student.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListClassStudents;