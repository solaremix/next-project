
'use client';
import './style.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {FormControl} from 'react-bootstrap';
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Registro = () => {

    const [correo, setCorreo] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPasword2] = useState('')
    const [nombres, setNombres] = useState('')
    const [apellido, setApellido] = useState('')
    const [Documento, setDocumento] = useState('')
    const [numDoc, setNumDoc] = useState('')
    const [rol, setRol] = useState('')
    

    const router = useRouter()

    const handleClick = () => {
        if (password===password2 ) {
            
        } else 
            alert('Usuario o password incorrecto')
    
          if (rol==="Estudiante" || rol==="Profesor" ||rol==="estudiante" || rol==="profesor" ) {
            
        } else
            alert('Rol incorrecto, Escoger entre Profesor y Estudiante')
    
            if (Documento==="DNI" || Documento==="Pasaporte"|| Documento==="dni" || Documento==="pasaporte"|| Documento==="Dni" ) {
              router.push('/ejercicio6')
          } else
              alert('Rol incorrecto, Escoger entre DNI y Pasaporte')
    
    }
    return (
        <div>

          <h3>Sistema de Citas para Atención a Estudiantes</h3>
          <h3>Pagina de Registro</h3>
          <div> 
            <Form>
              <Row>
                <Col>
                  <Form.Label>Correo Electronico</Form.Label>
                  <Form.Control type="text"onChange={e => setCorreo(e.target.value)} className='textfield' />
                    <br />
                  
                    <br />


                </Col>
                <Col>
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}  className='textfield'/>
                <br />
                <Form.Label>Ingrese contraseña nuevamente</Form.Label>
                <Form.Control type="password"  onChange={e => setPasword2(e.target.value)} className='textfield' />
                </Col>
              </Row>
            </Form>
          </div>
          <br />
          <br />
         
          
          <div>
            <h6>Datos Personales</h6>  
            <Form>
              <Row>
                <Col>
                  <Form.Label>Nombre de Usuario</Form.Label>
                  <Form.Control type="text"  onChange={e => setNombres(e.target.value)} className='textfield' />
                    <br />
                    <Form.Label>Tipo de Documento</Form.Label>
                  <Form.Control type="text"  onChange={e => setDocumento(e.target.value)} className='textfield' />
                    <br />
                    <Form.Label>Rol</Form.Label>
                  <Form.Control type="text"  onChange={e => setRol(e.target.value)} className='textfield' />


                </Col>
                <Col>
                <Form.Label>Apellido</Form.Label>
                <Form.Control type="text"  onChange={e => setApellido(e.target.value)}className='textfield' />
                <br />
                <Form.Label>Ingrese Numero de Documento</Form.Label>
                <Form.Control type="text"  onChange={e => setNumDoc(e.target.value)}className='textfield' />
                </Col>
              </Row>
            </Form>
          </div>   
          <br />
          <div class="boton" >
          <Button onClick={handleClick} className="boton">Registrar</Button>
          </div>

            
        </div>
    )
} 

export default Registro