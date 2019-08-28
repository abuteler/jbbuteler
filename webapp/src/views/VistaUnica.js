import React from 'react';
import ReactDOM from 'react-dom'
import TituloSeccion from '../components/TituloSeccion';
import './VistaUnica.scss';

import colored_head from '../assets/head-in-colors.jpg';
import bachi from '../assets/retrato-bachi.jpg';

class VistaUnica extends React.Component {
  componentDidUpdate() {
    let hash = this.props.location.pathname.replace('/', '');
    const heights = {
      home: ReactDOM.findDOMNode(this.refs['home']).offsetHeight,
      sobremi: ReactDOM.findDOMNode(this.refs['sobremi']).offsetHeight,
      tratamientos: ReactDOM.findDOMNode(this.refs['tratamientos']).offsetHeight,
      contacto: ReactDOM.findDOMNode(this.refs['contacto']).offsetHeight,
    }
    let offset = null;
    switch (hash) {
      case 'sobremi':
        offset = heights.home;
        break;
      case 'tratamientos':
        offset = heights.home + heights.sobremi;
        break;
      case 'contacto':
        offset = heights.home + heights.sobremi + heights.tratamientos;
        break;
      default:
          offset = 0;
        break;
    }
    window.scrollTo({ behavior: "smooth", top: offset });
  }
  render () {

    return (
      <div>
        <div className="ViewContainer" id="VistaHome" ref="home">
          <img src={colored_head} alt="Cabeza en trazos coloridos" />
        </div>
        <div className="ViewContainer" id="VistaSobreMi" ref="sobremi">
          <TituloSeccion titulo="Sobre Mí" />
          <img src={bachi} alt="Retrato Licenciado Buteler" />
          <p>
            Licenciado en Psicología Juan Bautista Buteler<br />
            M.N. 47.500 M.P. 95.701
          </p>
          <br />
          <p>
              Me recibí de Licenciado en Psicología en el año 2009. Trabajo en consultorio privado desde esa época. Trabajé con niños, adolescentes y adultos. Hoy sólo trabajo con adultos. Fui Coordinador de la Comunidad Terapéutica para el tratamiento del abuso y adicción a las drogas Hogar San Ignacio de Julio 2011 a Febrero 2017. Doy Talleres de Prevención de Adicciones. Soy Consejero Titular en el Distrito XV del Colegio de Psicólogos de la Provincia de Buenos Aires desde diciembre del 2013 hasta el presente. Trabajo con un Equipo, con los que de manera interdisciplinaria, acompañamos a un paciente con TGD (autismo) en la vida que le tocó y haciendo todo lo posible para que sea la mejor para él y su familia. Desde el año 2010 doy Talleres de Estimulación de la Memoria para la Tercera Edad. Soy marido y padre de cuatro hijos, los que me hacen sentir más orgullo que mi actual profesión, incluida la anterior, ya que fui Marino. También entre otros trabajos que tuve, fui empleado de comercio, empezando como vendedor, llegando al cargo de Gerente de Comercialización y apoderado de la Empresa. Todas éstas actividades y experiencias me permiten, junto con los conocimientos adquiridos en la Universidad, que desde entonces sigo incrementando, dar los Talleres y ayudar a mis pacientes en mi consultorio.
          </p>
        </div>
        <div className="ViewContainer" id="VistaTratamientos" ref="tratamientos">
          <TituloSeccion titulo="Tratamimentos" />
          <p>ALGUNAS DE LAS PROBLEMÁTICAS POR LAS QUE LAS PERSONAS COMIENZAN UN TRATAMIENTO PSICOLÓGICO:</p>
          <ul>
            <li>- Ansiedad​</li>
            <li>- Angustia</li>
            <li>- Estrés​</li>
            <li>- Ataque de pánico​</li>
            <li>- Depresión​</li>
            <li>- Excesiva tristeza</li>
            <li>- Problemas de relación​</li>
            <li>- Dependencia emocional</li>
            <li>- Inestabilidad emocional</li>
            <li>- Dificultades en el área laboral</li>
            <li>- Trastornos de la personalidad</li>
            <li>- Problemas del sueño</li>
            <li>- Impulsividad</li>
            <li>- Celos</li>
            <li>- Irritabilidad</li>
            <li>- Inseguridad</li>
            <li>- Timidez​</li>
            <li>- Trastornos de la alimentación</li>
            <li>- Duelo</li>
            <li>- Obsesiones</li>
            <li>- Desmotivación</li>
            <li>- Miedos y Fobias</li>
            <li>- Trastornos y disfunciones sexuales.</li>
          </ul>
          <p>
            Existe otro motivo de consulta, que es el de personas, que no sintiendo ningún síntoma, quieren hacer rendir sus capacidades al máximo de sus posibilidades, y por tal razón concurren a un psicólogo para ver porque no está sucediendo y así poder revertir la situación, adquiriendo herramientas cognitivas que le permitan mejorar su calidad de vida y la de su entorno, ya sea familiar, social o laboral.
          </p>
        </div>
        <div className="ViewContainer" id="VistaContacto" ref="contacto">
          <TituloSeccion titulo="Contacto" />
          <p>Celular: +54 9 11 5003 7697</p>
          <p>E-Mail: <a href="mailto:jbbuteler@hotmail.com">jbbuteler@hotmail.com</a></p>
        </div>
      </div>
    );
  }
}

export default VistaUnica;
