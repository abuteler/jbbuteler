import React from 'react';
import TituloSeccion from '../components/TituloSeccion';
import './SobreMiView.scss';
import bachi from '../assets/retrato-bachi.jpg';

const SobreMiView = () => {
  const titulo = 'Sobre Mí';
  return (
    <div className="SobreMiContainer">
      <TituloSeccion titulo={titulo} />
      <img src={bachi} alt="Retrato Licenciado Buteler" />
      <p>
        Licenciado en Psicología Juan Bautista Buteler<br />
        M.N. 47.500 M.P. 95.701
      </p>
      <br />
      <p>
          Me recibí de Licenciado en Psicología en el año 2009. Trabajo en consultorio privado desde esa época. Trabajé con niños, adolescentes y adultos. Hoy sólo trabajo con adultos. Fui Coordinador de la Comunidad Terapéutica para el tratamiento del abuso y adicción a las drogas Hogar San Ignacio de Julio 2011 a Febrero 2017. Doy Talleres de Prevención de Adicciones. Soy Consejero Titular en el Distrito XV del Colegio de Psicólogos de la Provincia de Buenos Aires desde diciembre del 2013 hasta el presente. Trabajo con un Equipo, con los que de manera interdisciplinaria, acompañamos a un paciente con TGD (autismo) en la vida que le tocó y haciendo todo lo posible para que sea la mejor para él y su familia. Desde el año 2010 doy Talleres de Estimulación de la Memoria para la Tercera Edad. Soy marido y padre de cuatro hijos, los que me hacen sentir más orgullo que mi actual profesión, incluida la anterior, ya que fui Marino. También entre otros trabajos que tuve, fui empleado de comercio, empezando como vendedor, llegando al cargo de Gerente de Comercialización y apoderado de la Empresa. Todas éstas actividades y experiencias me permiten, junto con los conocimientos adquiridos en la Universidad, que desde entonces sigo incrementando, dar los Talleres y ayudar a mis pacientes en mi consultorio. Su contacto conmigo va a ser confidencial como todo el tratamiento.
      </p>
    </div>
  );
}

export default SobreMiView;
