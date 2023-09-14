import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import TituloSeccion from '../components/TituloSeccion';
import './VistaUnica.scss';

import colored_head from '../assets/head-in-colors.jpg';
import bachi from '../assets/nuevo-retrato-bachi.png';

import TratamientosContenidos from './TratamientosContenidos';

export default function VistaUnica() {
  const { pathname } = useLocation();

  const homeRef = useRef<HTMLDivElement>(null);
  const sobremiRef = useRef<HTMLDivElement>(null);
  const tratamientosRef = useRef<HTMLDivElement>(null);
  const contactoRef = useRef<HTMLDivElement>(null);
  

  useEffect(() => {
    const hash = pathname?.replace('/', '');
    const alturas = {
      home: homeRef.current?.offsetHeight || 0,
      sobremi: sobremiRef.current?.offsetHeight || 0,
      tratamientos: tratamientosRef.current?.offsetHeight || 0,
      contacto: contactoRef.current?.offsetHeight || 0,
    };
    let offset = null;
    switch (hash) {
      case 'sobremi':
        offset = alturas.home;
        break;
      case 'tratamientos':
        offset = alturas.home + alturas.sobremi;
        break;
      case 'contacto':
        offset = alturas.home + alturas.sobremi + alturas.tratamientos;
        break;
      default:
        offset = 0;
        break;
    }
    window.scrollTo({ behavior: 'smooth', top: offset });
  // }, [pathname, sectionRefs]);
  }, [pathname, homeRef, sobremiRef, tratamientosRef, contactoRef]);

  return (
    <div>
      <div className="ViewContainer" id="VistaHome" ref={homeRef}>
        <img src={colored_head} alt="Cabeza en trazos coloridos" />
      </div>
      <div className="ViewContainer" id="VistaSobreMi" ref={sobremiRef}>
        <TituloSeccion titulo="Sobre Mí" />
        <img src={bachi} alt="Retrato Licenciado Buteler" />
        <p>
          Licenciado en Psicología Juan Bautista Buteler
          <br />
          M.N. 47.500 M.P. 95.701
        </p>
        <br />
        <p>
          Trabajo en consultorio privado con adultos en un ambiente confidencial y empático, generando confianza y respeto, ayudándolos con sus problemas de pareja en algunos casos, en otros en los vínculos con los hijos, ataques de pánico, ansiedad, duelos, problemas de índole laboral y académicos, uso y abuso de drogas, alcohol, etc. Pedir ayuda, es el primer paso para salir de un estado de insatisfacción, dónde las causas son diversas. El enfoque terapéutico es principalmente el Psicoanálisis, para encontrar las causas y llegar a un diagnóstico, luego, dependiendo el caso, seguir con el Psicoanálisis o dar un giro al Cognitivismo Conductual y/o a la Terapia Sistémica. La duración del tratamiento también depende de cada caso.
        </p>
        <br />
      </div>
      <div className="ViewContainer" id="VistaTratamientos" ref={tratamientosRef}>
        <TratamientosContenidos />
      </div>
      <div className="ViewContainer" id="VistaContacto" ref={contactoRef}>
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
              // frameBorder="0"
              // allowFullScreen=""
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
