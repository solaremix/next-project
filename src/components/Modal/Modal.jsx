'use client';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {citas} from '../../api/citas.js';

function Aviso({nombreprof, curso, fecha}) {
    const fechaSistema = new Date();
    const [citasOriginal, setCitasOriginal] = useState(citas);
    const [citasProximas, setCitasProximas] = useState([]);

    const filtrarFecha = () =>{
        const citasProx = citasOriginal.filter(elemento => ( (fechaSistema - new Date(elemento.fecha)) <= 172800 ));
        setCitasProximas(citasProx)

      };

    useEffect(()=>{
        filtrarFecha()
    },[])

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Recordatorio de próximas citas</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        { citasProximas.length === 0 ? (
                <p>No hay citas próximas para recordar</p>
            ):
            (citasProximas.map(elem => (
                <ul>
                    <li>
                        Hay cita con el profesor {elem.nombreprof} en el curso {elem.curso}
                    </li>
                </ul>
                )))
        }
        </Modal.Body>
        
      </Modal>
    </>
  );
}


export default Aviso;