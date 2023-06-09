
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import '../estudiante/style.css'

const Can = ({ nomEest, especialidad, fecha, curso, onDelete }) => {
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = () => {
    setIsDeleted(true);
    onDelete();
  };

  if (isDeleted) {
    return null; // No se muestra el card si está marcado como eliminado
  }

  return (
    <Card className="carta" style={{ width: '20rem' }}>
      <Card.Header className="profesor">
        <Card.Img className="foto" src="https://lh3.googleusercontent.com/a/AAcHTtceq_PyTlIHE_JS-KNtUQYjtwW6rLP4CLczKxrjuQ=s83-c-mo" />
        <div>
          <h5>{nomEest}</h5>
          <span>{especialidad}</span>
        </div>
      </Card.Header>
      <Card.Img variant="top" width={171} height={180}  src="https://cdn.discordapp.com/attachments/1065834267084595203/1110749327946682428/franco.jpeg" />
      <Card.Body>
        <Card.Title>{fecha}</Card.Title>
        <Card.Text>
          <p>{curso}</p>
          <Card.Link>Enlace Zoom</Card.Link>
          <br />
        </Card.Text>
        <div className="calificacion">
          <Button variant="outline-secondary" className="boton" onClick={handleDelete}>
            Cancelar
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Can;