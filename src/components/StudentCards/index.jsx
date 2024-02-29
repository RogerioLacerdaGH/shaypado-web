import perfil from '../../assets/profire-300x300.png';
import React, { useState } from 'react';
import styles from './styles.module.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const StudentCards = () => {
  const nomeAlunos = ["aluno1", "aluno2", "aluno3", "aluno4", "aluno5", "aluno6", "aluno7", "aluno8","aluno1", "aluno2", "aluno3", "aluno4", "aluno5", "aluno6", "aluno7", "aluno8","aluno1", "aluno2", "aluno3", "aluno4", "aluno5", "aluno6", "aluno7", "aluno8"];
  const cardsPorPagina = 20; 

  const [paginaAtual, setPaginaAtual] = useState(1);

  const indiceInicial = (paginaAtual - 1) * cardsPorPagina;
  const indiceFinal = paginaAtual * cardsPorPagina;
  const TurmasPagina = nomeAlunos.slice(indiceInicial, indiceFinal);

  const totalPages = Math.ceil(nomeAlunos.length / cardsPorPagina);

  const renderizarCards = () => {
    return (
      <Row xs={1} md={4} className={`${styles['card-container']}`}>
        {TurmasPagina.map((aluno, index) => (
          <Col key={index}>
            <Card className={`${styles['card-bgColor']} ${styles['rounded-card']} ${styles['card']}`}>
              <Card.Img className={`${styles['card-img']}`} variant="top" src={perfil} alt="turma" />
              <Card.Body>
                <Card.Title>{aluno}</Card.Title>
                <Card.Text>
                  Alguma informação do turma
                </Card.Text>
                <Button variant="primary">Botão para alguma ação</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );
  }
  


  const handlePaginaAnterior = () => {
    if (paginaAtual > 1) {
      setPaginaAtual(paginaAtual - 1);
    }
  }

  const handleProximaPagina = () => {
    if (paginaAtual < totalPages) {
      setPaginaAtual(paginaAtual + 1);
    }
  }

  return (
    <Container>
      {renderizarCards()}
      <div className="pagination">
        <Button onClick={handlePaginaAnterior} disabled={paginaAtual === 1}>Anterior</Button>
        <Button onClick={handleProximaPagina} disabled={paginaAtual === totalPages}>Próxima</Button>
      </div>
    </Container>
  );
}

export default StudentCards;
