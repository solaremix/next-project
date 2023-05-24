'use client';

import React, { useState } from 'react';
import { Button, Container, Form, Toast } from 'react-bootstrap';

const ReservaCita = () => {
  const [opcion, setOpcion] = useState('');
  const [nombreProfesor, setNombreProfesor] = useState('');
  const [fecha, setFecha] = useState('');
  const [confirmacion, setConfirmacion] = useState('');

  const handleOpcionClick = (opcion) => {
    setOpcion(opcion);
    setNombreProfesor('');
    setFecha('');
    setConfirmacion('');
  };

  const handleNombreProfesorChange = (e) => {
    setNombreProfesor(e.target.value);
  };

  const handleFechaChange = (e) => {
    setFecha(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (opcion === 'nombre') {
      // Lógica para buscar profesores por nombre
      if (nombreProfesor === 'Carlos') {
        setConfirmacion('Reserva de cita, usted ha reservado la cita exitosamente');
      } else if (nombreProfesor === 'Ernesto') {
        setConfirmacion('Reserva de cita, usted ha reservado la cita exitosamente');
      }
    } else if (opcion === 'fecha') {
      // Lógica para buscar profesores por fecha
      if (fecha === '2023-04-24') {
        setConfirmacion('Reserva de cita, usted ha reservado la cita exitosamente');
      }
    }

    setTimeout(() => {
      setConfirmacion('');
    }, 5000);
  };

  return (
    <Container>
      <h1>Reservar una cita</h1>
      <div className="d-flex">
        <Button
          variant={opcion === 'nombre' ? 'primary' : 'secondary'}
          onClick={() => handleOpcionClick('nombre')}
          className="me-2"
        >
          Por nombre
        </Button>
        <Button
          variant={opcion === 'fecha' ? 'primary' : 'secondary'}
          onClick={() => handleOpcionClick('fecha')}
        >
          Por fecha
        </Button>
      </div>

      {opcion === 'nombre' && (
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="nombreProfesor">
            <Form.Label>Ponga el nombre del profesor</Form.Label>
            <Form.Control
              type="text"
              value={nombreProfesor}
              onChange={handleNombreProfesorChange}
            />
          </Form.Group>

          {nombreProfesor === 'Carlos' && (
            <div className="alert alert-primary">
              <p>Nombre: Carlos Cáceres</p>
              <p>Universidad de Lima - Ingeniería de Sistemas</p>
            </div>
          )}

          {nombreProfesor === 'Ernesto' && (
            <div className="alert alert-primary">
              <p>Nombre: Ernesto Rodriguez</p>
              <p>Universidad de Lima - Ingeniería de Sistemas</p>
            </div>
          )}

          <Button variant="primary" type="submit">
            Reservar Cita
          </Button>
        </Form>
      )}

      {opcion === 'fecha' && (
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="fecha">
            <Form.Label>Seleccionar fecha</Form.Label>
            <Form.Control
              type="date"
              value={fecha}
              onChange={handleFechaChange}
            />
          </Form.Group>

          {fecha === '2023-04-24' && (
            <div className="alert alert-primary">
              <p>Nombre: Carlos Cáceres</p>
              <p>Universidad de Lima - Ingeniería de Sistemas</p>
            </div>
          )}

          {fecha === '2023-04-25' && (
            <div className="alert alert-primary">
              <p>Nombre: Ernesto Rodriguez</p>
              <p>Universidad de Lima - Ingeniería de Sistemas</p>
            </div>
          )}

          <Button variant="primary" type="submit">
            Reservar Cita
          </Button>
        </Form>
      )}

      {confirmacion && (
        <Toast show={true} onClose={() => setConfirmacion('')} delay={10000} autohide>
          <Toast.Header>
            <strong className="me-auto">Mensaje de Confirmación</strong>
          </Toast.Header>
          <Toast.Body>{confirmacion}</Toast.Body>
        </Toast>
      )}
    </Container>
  );
};

export default ReservaCita;
