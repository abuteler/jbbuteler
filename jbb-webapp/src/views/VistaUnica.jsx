import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useLocation } from "react-router-dom";
import TituloSeccion from "../components/TituloSeccion";
import Ensayo from "../components/Ensayo";
import {
  InteligenciasMultiples,
  PensamientosAmor,
} from "../assets/ensayos/ensayos";
import "./VistaUnica.scss";

import colored_head from "../assets/head-in-colors.jpg";
import bachi from "../assets/nuevo-retrato-bachi.png";

export default function VistaUnica(props) {
  const location = useLocation();
  const sectionRefs = {
    home: React.createRef(),
    sobremi: React.createRef(),
    ensayos: React.createRef(),
    tratamientos: React.createRef(),
    contacto: React.createRef(),
  };
  useEffect(() => {
    const hash = location?.pathname?.replace("/", "");
    const { home, sobremi, ensayos, tratamientos, contacto } = sectionRefs;
    const alto = {
      home: ReactDOM.findDOMNode(home.current).offsetHeight,
      sobremi: ReactDOM.findDOMNode(sobremi.current).offsetHeight,
      ensayos: ReactDOM.findDOMNode(ensayos.current).offsetHeight,
      tratamientos: ReactDOM.findDOMNode(tratamientos.current).offsetHeight,
      contacto: ReactDOM.findDOMNode(contacto.current).offsetHeight,
    };
    let offset = null;
    switch (hash) {
      case "sobremi":
        offset = alto.home;
        break;
      case "ensayos":
        offset = alto.home + alto.sobremi;
        break;
      case "tratamientos":
        offset = alto.home + alto.sobremi + alto.ensayos;
        break;
      case "contacto":
        offset = alto.home + alto.sobremi + alto.ensayos + alto.tratamientos;
        break;
      default:
        offset = 0;
        break;
    }
    window.scrollTo({ behavior: "smooth", top: offset });
  }, [location]);

  const { home, sobremi, ensayos, tratamientos, contacto } = sectionRefs;

  return (
    <div>
      <div className="ViewContainer" id="VistaHome" ref={home}>
        <img src={colored_head} alt="Cabeza en trazos coloridos" />
      </div>
      <div className="ViewContainer" id="VistaSobreMi" ref={sobremi}>
        <TituloSeccion titulo="Sobre Mí" />
        <img src={bachi} alt="Retrato Licenciado Buteler" />
        <p>
          Licenciado en Psicología Juan Bautista Buteler
          <br />
          M.N. 47.500 M.P. 95.701
        </p>
        <br />
        <p>
          Trabajo en consultorio privado con adultos en un ambiente confidencial
          y empático, generando confianza y respeto, ayudándolos con sus
          problemas de pareja en algunos casos, en otros en los vínculos con los
          hijos, ataques de pánico, ansiedad, duelos, problemas de índole
          laboral y académicos, uso y abuso de drogas, alcohol, etc. Pedir
          ayuda, es el primer paso para salir de un estado de insatisfacción,
          dónde las causas son diversas. El enfoque terapéutico es
          principalmente el Psicoanálisis, para encontrar las causas y llegar a
          un diagnóstico, luego, dependiendo el caso, seguir con el
          Psicoanálisis o dar un giro al Cognitivismo Conductual y/o a la
          Terapia Sistémica. La duración del tratamiento también depende de cada
          caso.
        </p>
        <br />
      </div>
      <div className="ViewContainer" id="VistaEnsayos" ref={ensayos}>
        <TituloSeccion titulo="Ensayos" />
        <Ensayo ensayo={InteligenciasMultiples} />
        <Ensayo ensayo={PensamientosAmor} />
      </div>
      <div className="ViewContainer" id="VistaTratamientos" ref={tratamientos}>
        <TituloSeccion titulo="Tratamimentos" />
        <p>
          ALGUNAS DE LAS PROBLEMÁTICAS POR LAS QUE LAS PERSONAS COMIENZAN UN
          TRATAMIENTO PSICOLÓGICO:
        </p>
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
          Existe otro motivo de consulta, que es el de personas, que no
          sintiendo ningún síntoma, quieren hacer rendir sus capacidades al
          máximo de sus posibilidades, y por tal razón concurren a un psicólogo
          para ver porque no está sucediendo y así poder revertir la situación,
          adquiriendo herramientas cognitivas que le permitan mejorar su calidad
          de vida y la de su entorno, ya sea familiar, social o laboral.
        </p>
      </div>
      <div className="ViewContainer" id="VistaContacto" ref={contacto}>
        <TituloSeccion titulo="Contacto" />
        <div className="ColContainer">
          <div className="LeftCol">
            <p>Celular: +54 9 11 5003 7697</p>
            <p>
              E-Mail:{" "}
              <a href="mailto:jbbuteler@hotmail.com">jbbuteler@hotmail.com</a>
            </p>
            <p>
              LinkedIn:{" "}
              <a href="https://www.linkedin.com/in/juanbautistabuteler/">
                /in/juanbautistabuteler/
              </a>
            </p>
            <p>
              Consultorio en CABA, Mart&iacute;nez, <br />y San Fernando.
            </p>
          </div>
          <div className="RightCol">
            <iframe
              title="Mapa en Google"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3288.765841748239!2d-58.50446358477363!3d-34.48346398049088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb16bbf78b045%3A0xf0ef500df50478cf!2sLic.%20Juan%20Bautista%20Buteler%20-%20Psic%C3%B3logo!5e0!3m2!1sen!2sar!4v1573828990572!5m2!1sen!2sar"
              width="330"
              height="290"
              frameBorder="0"
              allowFullScreen=""
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
