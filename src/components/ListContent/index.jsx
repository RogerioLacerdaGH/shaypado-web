import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import styles from './styles.module.css';

const ListContent = () => {
  const nomeAlunos = ["aluno1", "aluno2", "aluno3", "aluno4", "aluno5", "aluno6", "aluno7", "aluno8"];
  const [alunoSelecionado, setAlunoSelecionado] = useState(null);

  return (
    <div>
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <Row>
          <Col sm={4}>
            <ListGroup className={styles["vertical-list"]}> {/* Utilize a classe importada */}
              {nomeAlunos.map((aluno, index) => (
                <ListGroup.Item
                  key={index}
                  action
                  href={`#link${index + 1}`}
                  onClick={() => setAlunoSelecionado(aluno)}
                  active={aluno === alunoSelecionado}
                >
                  {aluno}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col sm={8}>
            <Tab.Content>
              {alunoSelecionado && (
                <Tab.Pane eventKey={`#${nomeAlunos.indexOf(alunoSelecionado) + 1}`}>
                  {`Conteúdo do aluno ${alunoSelecionado}`}
                </Tab.Pane>
              )}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default ListContent;
