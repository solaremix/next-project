'use client';
import Estrellas from '../../components/Estrellas/Estrellas.jsx'
import './style.css'
import Button from 'react-bootstrap/Button'
import TextArea from '../../components/TextArea/TextArea.jsx'

const calificar = () =>{
    return(
        <div className='contenedor'>
            <h2 className='titulo'>Califica la atención</h2>
            <hr></hr>
            <p>Es muy importante para nosotros saber cómo te fue en tu sesión de asesoría.</p>
            <br></br>
            <Estrellas></Estrellas>
            <br></br>
            <p>Si crees que es necesario agregar un comentario, por favor usa la caja de comentarios.</p>
            <br></br>
            <TextArea props = "Dejar un comentario aquí..."></TextArea>
            <br></br>
            <Button className='boton'>Guardar</Button>
        </div>
    )
}

export default calificar;