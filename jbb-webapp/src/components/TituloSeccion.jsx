import React from 'react';

import './TituloSeccion.scss';

class TituloSeccion extends React.Component {

  render () {
    const { titulo } = this.props;
    return (
      <div className="SectionTitleContainer">
        <h3>{titulo}</h3>
      </div>
    );
  }
}

export default TituloSeccion;
