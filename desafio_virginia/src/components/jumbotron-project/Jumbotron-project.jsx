import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const JumbotronProject = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Bienvenido</h1>
          <p className="lead">"No te preocupes si no funciona bien. Si todo estuviera correcto, serías despedido de tu trabajo"
<br />-- Ley de Mosher de la Ingeniería del Software.</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default JumbotronProject;