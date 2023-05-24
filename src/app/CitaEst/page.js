  'use client';
  import Can from '../../components/Card_cancelar/estudiante/Card_can.jsx'
  import '../Cita/style1.css'
  import Button from 'react-bootstrap/Button'
  import React from 'react';
  import {citasEst} from '../../api/citasEst.js';
  import { useState, useEffect } from 'react';
  import { useRouter } from 'next/navigation'
  const CitaEst = () => {
      const fechaSistema = new Date();
      const [citasOriginal, setCitasOriginal] = useState(citasEst);
      const [citasFiltrado, setCitasFiltrado] = useState([]);

      const filtrarFecha = () =>{
          const citasFiltradas = citasOriginal.filter(elemento => (new Date(elemento.fecha) < fechaSistema));
          setCitasFiltrado(citasFiltradas)

        };

      useEffect(()=>{
          filtrarFecha()
      },[])
      const handleDeleteCard = (elem) => {
          const nuevaCitasFiltrado = citasFiltrado.filter(item => item.id == elem.id);
          setCitasFiltrado(nuevaCitasFiltrado);
        };

              const router = useRouter()
              const handleClick1 =()=>{
                router.push('/reservar_cita')

              }
              const handleClick =()=>{
                router.push('/citaspasadas')

        }

      

      

              return(
                      <div className='cuerpo'>
                          <div className='arriba'>
                              <h2 className='titulo'>Mis citas</h2>
                              <Button variant="outline-secondary" className='programar' onClick={handleClick1}>Programar una cita</Button>
                          </div>
                          <br></br>
                          <br></br>
                          <div>
                              <hr></hr> 
                          </div>
                          <div>
                              <h4 className='titulo'>Citas de asesoria reservadas</h4>
                              <Button variant="outline-secondary" className='programar2'onClick={handleClick}>Ver citas pasadas</Button>
                          </div>
                          <br></br>
                          <br></br>
                          <div className='cards'>
                              
                                  {citasFiltrado.map(elem => (
                                      <Can  nomEest={elem.nomEest} especialidad={elem.especialidad} fecha={elem.fecha} 
                                      curso={elem.curso} onDelete={() => handleDeleteCard(elem)}/>
                                  ))
                                  }
                          </div>
          
                      </div>
                  )
              }


  export default CitaEst;