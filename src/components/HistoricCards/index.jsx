import historicoIcon from "../../assets/historico.png"
import React, { useState } from 'react';
import styles from './styles.module.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HistoricCards = () => {
  const nomeHistoricos = ["historico1", "historico2", "historico3", "historico4", "historico5", "historico6", "historico7", "historico8","historico1", "historico2", "historico3", "historico4", "historico5", "historico6", "historico7", "historico8","historico1", "historico2", "historico3", "historico4", "historico5", "historico6", "historico7", "historico8","historico1", "historico2", "historico3", "historico4", "historico5", "historico6", "historico7", "historico8","historico1", "historico2", "historico3", "historico4", "historico5", "historico6", "historico7", "historico8"];
  const cardsPorPagina = 20; 

  const [paginaAtual, setPaginaAtual] = useState(1);

  const indiceInicial = (paginaAtual - 1) * cardsPorPagina;
  const indiceFinal = paginaAtual * cardsPorPagina;
  const TurmasPagina = nomeHistoricos.slice(indiceInicial, indiceFinal);

  const totalPages = Math.ceil(nomeHistoricos.length / cardsPorPagina);

  const renderizarCards = () => {
    return (
      <Row xs={1} md={4} className={`${styles['card-container']}`}>
        {TurmasPagina.map((historico, index) => (
          <Col key={index}>
            <Card className={`${styles['card-bgColor']} ${styles['rounded-card']} ${styles['card']}`}>
              <Card.Img className={`${styles['card-img']}`} variant="top" src={historicoIcon} alt="turma" />
              <Card.Body>
                <Card.Title>{historico}</Card.Title>
                <Card.Text>
                  Alguma informação do histórico
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

export default HistoricCards