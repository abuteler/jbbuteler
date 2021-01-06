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
          <p><ul>
            <li>Fui Coordinador de la Comunidad Terapéutica para el tratamiento del abuso y adicción a las drogas Hogar San Ignacio de Julio 2011 a Febrero 2017.</li>
            <li>Doy Talleres de Prevención de Adicciones.</li>
            <li>Desde el año 2010 doy Talleres de Estimulación de la Memoria para la Tercera Edad de manera Grupal.</li>
            <li>Doy sesiones de Rehabilitación cognitiva de manera individual.</li>
            <li>Trabajo en consultorio privado con adultos ayudándolos con sus problemas de pareja en algunos casos, en otros en los vínculos con los hijos, ataques de pánico, duelos, problemas laborales, uso y abuso de drogas, alcohol, etc.</li>
          </ul></p>
          <br />
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
          <div className="ColContainer">
            <div className="LeftCol">
              <p>Celular: +54 9 11 5003 7697</p>
              <p>E-Mail: <a href="mailto:jbbuteler@hotmail.com">jbbuteler@hotmail.com</a></p>
              <p>LinkedIn: <a href="https://www.linkedin.com/in/juanbautistabuteler/">/in/juanbautistabuteler/</a></p>
              <p>Consultorio en Mart&iacute;nez.</p>
            </div>
            <div className="RightCol">
              <iframe title="Mapa en Google" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3288.765841748239!2d-58.50446358477363!3d-34.48346398049088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb16bbf78b045%3A0xf0ef500df50478cf!2sLic.%20Juan%20Bautista%20Buteler%20-%20Psic%C3%B3logo!5e0!3m2!1sen!2sar!4v1573828990572!5m2!1sen!2sar" width="330" height="290" frameBorder="0" allowFullScreen=""></iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VistaUnica;
