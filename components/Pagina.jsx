import React from "react";
import Cabecalho from "./Cabecalho";
import { Container } from "react-bootstrap";

const Pagina = (props) => {
  return (
    <div>
      <Cabecalho />
      <div className="py-3 text-white text-center mb-3 bg-secondary">
        <Container>
          <h1>{props.titulo}</h1>
        </Container>
      </div>
      <Container className="mb-5 pb-3">{props.children}</Container>
    </div>
  );
};

export default Pagina;
