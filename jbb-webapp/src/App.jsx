import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import VistaUnica from "./views/VistaUnica";

import "./App.scss";
import footer_logo from "./assets/9S_footer.png";

function App() {
  const basePath = "";
  const links = [
    { nombre: "Home", path: "/" },
    { nombre: "Sobre Mí", path: "/sobremi" },
    { nombre: "Ensayos", path: "/ensayos" },
    { nombre: "Tratamientos", path: "/tratamientos" },
    { nombre: "Contacto", path: "/contacto" },
  ];
  return (
    <div className="App">
      <div className="JBB-Container">
        <header>
          <h1>Juan Bautista Buteler.</h1>
          <hr />
          <h2>Psic&oacute;logo</h2>
        </header>
        <BrowserRouter>
          <nav>
            {links.map(({ nombre, path }, i) => (
              <NavLink
                key={i}
                className={({ isActive }) =>
                  isActive ? "is-active link" : "link"
                }
                to={path}
              >
                {nombre}
              </NavLink>
            ))}
          </nav>
          <section id="App-Views">
            <Routes>
              <Route path={`${basePath}/`} element={<VistaUnica />} />
              <Route path={`${basePath}/sobremi`} element={<VistaUnica />} />
              <Route path={`${basePath}/ensayos`} element={<VistaUnica />} />
              <Route
                path={`${basePath}/tratamientos`}
                element={<VistaUnica />}
              />
              <Route path={`${basePath}/contacto`} element={<VistaUnica />} />
              {/* <Route path={`${basePath}/blog`} element={<VistaUnica />} /> */}
            </Routes>
          </section>
        </BrowserRouter>
      </div>
      <footer id="EnneagonStudios">
        <span>desarrollado por</span>
        <a
          href="http://www.enneagonstudios.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={footer_logo} alt="Enneagon Studios Logo" />
        </a>
      </footer>
    </div>
  );
}

export default App;
