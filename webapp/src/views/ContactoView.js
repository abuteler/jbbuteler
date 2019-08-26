import React from 'react';
import TituloSeccion from '../components/TituloSeccion';
import './ContactoView.scss';

const ContactoView = () => {
  const titulo = 'Contacto';
  return (
    <div className="ContactoContainer">
      <TituloSeccion titulo={titulo} />
      <p>Celular: +54 9 11 5003 7697</p>
      <p>E-Mail: jbbuteler@hotmail.com</p>
    </div>
  );
}

export default ContactoView;
