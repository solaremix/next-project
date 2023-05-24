'use client';

/*import styles from './login.css'*/

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { useState } from 'react'
import { useRouter } from 'next/navigation'


const login = () => {

    const [usuario, setUsuario] = useState('')
    const [password, setPassword] = useState('')

    const router = useRouter()

    const handleClick = () => {
        if (usuario==="profe" && password==="profe2023") {
            router.push('/pagprin_docente')
        } 
        else if (usuario==="alumno" && password==="alumno2023") {
            router.push('/screenAlumno')
        } else
            alert('Usuario o password incorrecto')
    }

    return (
        <div class="m-0 vh-100 row justify-content-center  align-items-center" >
            <div class="col-auto p-5 text-center" >
                <h2>
                Sistemas de Citas para Atención a Estudiantes
                </h2>
                <br />
                <Form.Control 
                    type="text" 
                    placeholder="Usuario o Correo"
                    onChange={e => setUsuario(e.target.value)} />
                <br />
                <Form.Control 
                    type="password" 
                    placeholder="Password"
                    onChange={e => setPassword(e.target.value)} />
                <br />
                <p>¿Eres nuevo? <a href="/registro">Regístrate</a> - <a href="resetPassword">¿Olvidates tu contraseña?</a></p>
                
                <br />
                <Button onClick={handleClick}>Ingresar</Button>

            </div>
        </div>
    )
} 

export default login