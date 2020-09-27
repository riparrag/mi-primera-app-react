import React from "react";
import Button from 'react-bootstrap/Button';

export default function RoComponent() {
    const consola = () => {
        console.log("1 creando ro component...");
    }
    console.log("2 crean do ro component...");
    return (
        <>
            <p>
                RoComponent by riparrag
            </p>
        </>
    );
}

export function Saludar(props) {
    var {persona,comportamiento} = props;
    return (
        <>
        <h3>Hola {persona.nombre} {persona.apellido} con {persona.edad}</h3>
        <Button variant="info" onClick={() => comportamiento(persona)}>
            Saludar
        </Button>
        </>
    );
}