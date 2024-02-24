import treinoIcon from "../../assets/treino.png"
import React, { useState } from 'react';
import styles from './styles.module.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const TrainingCards = () => {
  const nomeTreinos = ["treino1", "treino2", "treino3", "treino4", "treino5", "treino6", "treino7", "treino8"];
  const cardsPorPagina = 4;

  const [paginaAtual, setPaginaAtual] = useState(1);

  const indiceInicial = (paginaAtual - 1) * cardsPorPagina;
  const indiceFinal = paginaAtual * cardsPorPagina;
  const treinosPagina = nomeTreinos.slice(indiceInicial, indiceFinal);

  const totalPages = Math.ceil(nomeTreinos.length / cardsPorPagina);

  const renderizarCards = () => {
    return (
      treinosPagina.map((treino, index) => (
        <Col key={index}>
          <Card className={`${styles['card-bgColor']} ${styles['rounded-card']}`}>
            <Card.Img variant="top" src={treinoIcon} alt="treino" />
            <Card.Body>
              <Card.Title>{treino}</Card.Title>
              <Card.Text>
                Alguma informação do treino
              </Card.Text>
              <Button variant="primary">Botão para alguma ação</Button>
            </Card.Body>
          </Card>
        </Col>
      ))
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
      <Row xs={1} md={2} lg={4} className="g-4">
        {renderizarCards()}
      </Row>
      <div className="pagination">
        <Button onClick={handlePaginaAnterior} disabled={paginaAtual === 1}>Anterior</Button>
        <Button onClick={handleProximaPagina} disabled={paginaAtual === totalPages}>Próxima</Button>
      </div>
    </Container>
  );
}

export default TrainingCards