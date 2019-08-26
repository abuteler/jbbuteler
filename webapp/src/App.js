import React from 'react';
import { BrowserRouter as Router, Switch, NavLink, Route } from "react-router-dom";

import HomeView from './views/HomeView';
import SobreMiView from './views/SobreMiView';
import ContactoView from './views/ContactoView';
import NotFoundView from './views/NotFoundView';

import './App.scss';
import footer_logo from './assets/9S_footer.png';


function App() {
  const basePath = '';
  return (
    <div className="App">
      <div className="JBB-Container">
        <header>
          <h1>Juan Bautista Buteler.</h1>
          <hr />
          <h2>Psic&oacute;logo</h2>
        </header>
        <Router>
          <nav>
            <NavLink exact={true} activeClassName='is-active' className="link" to="/">Home</NavLink>
            <NavLink exact={true} activeClassName='is-active' className="link" to="/sobremi">Sobre M&iacute;</NavLink>
            {/* <NavLink exact={true} activeClassName='is-active' className="link" to="/">Teor&iacute;a de las Inteligencias M&uacute;ltiples</NavLink> */}
            <NavLink exact={true} activeClassName='is-active' className="link" to="/tratamientos">Tratamientos</NavLink>
            <NavLink exact={true} activeClassName='is-active' className="link" to="/contacto">Contacto</NavLink>
            <NavLink exact={true} activeClassName='is-active' className="link" to="/blog">Blog</NavLink>
          </nav>
          <section id="App-Views">
            <Switch>
              <Route exact path={`${basePath}/`} component={HomeView} />
              <Route exact path={`${basePath}/sobremi`} component={SobreMiView} />
              <Route exact path={`${basePath}/contacto`} component={ContactoView} />
              <Route component={NotFoundView} />
            </Switch>
          </section>
        </Router>
      </div>
      <footer id="EnneagonStudios">
        <span>desarrollado por</span>
        <a href="http://www.enneagonstudios.com/" target="_blank" rel="noopener noreferrer">
          <img src={footer_logo} alt="Enneagon Studios Logo" />
        </a>
      </footer>
    </div>
  );
}

export default App;
