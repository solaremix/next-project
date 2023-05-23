'use client';
import React from "react";
import Lista from "@/components/Lista/Lista";
import './style.css'
import Button from 'react-bootstrap/Button';
import Chip from '../../components/Chip/Chip.jsx'

const pagprin_docente = () => {
    return(
        <div className="contenedor">
            <div className="lista">
                <h2 className="titulo">Bienvenido, Profesor Juan!</h2>
                <hr></hr>
            </div>
            <div className="contCitas">
                <h3>Próximas Citas</h3>
                <Chip nombre={"Alfonso Carrión"} fecha={"18/06/2023 08:00 am"}></Chip>
                <Chip nombre={"Alfonso Carrión"} fecha={"18/06/2023 08:00 am"}></Chip>
            </div>
        </div>
    )
}

export default pagprin_docente;