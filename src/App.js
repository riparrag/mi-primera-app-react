import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import RoComponent, {Saludar} from "./components/RoComponent";
import { Usuario } from "./model/Usuario";
import {Accordion, Card, Button} from 'react-bootstrap';
import {ReactComponent as IconoReactSvg} from "./assets/react.svg";

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import PaginaConctacto from "./pages/PaginaContacto";
import PaginaQuienesSomos from "./pages/PaginaQuienesSomos";

function App() {
  const [contador, setContador] = useState(1);

  useEffect(() => {
    document.title = "clic " + contador;
  },[contador])

  /*
  let rodrigo = new Usuario();
  rodrigo.nombre = "Ro";
  rodrigo.apellido = "ipa";
  */
  const rodrigo = {
    nombre : "Rod",
     apellido : "ipa",
     edad: 38
  }
  const jaz = {
    nombre : "Jaz",
    apellido : "ipa",
    edad: 3
  }
  const comportamientoSaludar = persona => {
    setContador(valorAnterior => valorAnterior + 1);
    const {nombre = "anonimo"} = persona;
    console.log(`Hola saludamos a ${nombre} ${persona.apellido} con ${persona.edad} años de edad`);
  }
  
  //<img src={logo} className="App-logo" alt="logo" />
  return (
    <div className="App">
      <h1>React Bootstrap contador: {contador}</h1>
      <Router>
        <div>
          <Link to="/"><Button>Home</Button></Link>
          <Link to="/contacto"><Button>Contacto</Button></Link>
          <Link to="/quienes-somos"><Button>Quienes Somos</Button></Link>
        </div>
        <Switch>
          <Route path="/contacto">
            <PaginaConctacto/>
          </Route>
          <Route path="/quienes-somos">
            <PaginaQuienesSomos/>
          </Route>
        </Switch>
      </Router>
        <p>
          {rodrigo.nombre} {rodrigo.apellido} hizo el componente
        </p>
          <RoComponent />
          <Saludar persona={rodrigo} comportamiento={comportamientoSaludar}/>
          <Saludar persona={jaz} comportamiento={comportamientoSaludar}/>
          
<Accordion defaultActiveKey="0">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Click me!
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Hello! I'm the body</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        Click me!
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
    </div>
  );
}

export default App;
