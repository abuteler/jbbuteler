import { useEffect } from 'react';
import ReactGA from 'react-ga';
import { Routes, Route, useLocation, NavLink } from 'react-router-dom';

import VistaUnica from './views/VistaUnica'
import './App.scss';

import footer_logo from './assets/9S_footer.png';

function App() {
  //Google Analytics
  ReactGA.initialize('AW-1005728213', { debug: true });
  const { pathname } = useLocation();
  useEffect(()=>{
    ReactGA.pageview(pathname);
  }, [pathname])

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Sobre Mí', path: '/sobremi' },
    { name: 'Tratamientos', path: '/tratamientos' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <div className="App">
      <div className="JBB-Container">
        <header>
          <h1>Juan Bautista Buteler.</h1>
          <hr />
          <h2>Psic&oacute;logo</h2>
        </header>
        <nav>
          {links.map(({ name, path }, i) => (
            <NavLink
              key={i}
              className={({ isActive }) =>
                isActive ? "active link" : "link"
              }
              to={path}
            >
              {name}
            </NavLink>
          ))}
        </nav>
        <section id="App-Views">
          <Routes>
            <Route path="/" element={<VistaUnica />} />
            <Route path="/sobremi" element={<VistaUnica />} />
            <Route path="/tratamientos" element={<VistaUnica />} />
            <Route path="/contacto" element={<VistaUnica />} />
            {/* <Route path="*" element={<Navigate to="/error/404" replace />} /> */}
          </Routes>
        </section>
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
  )
}

export default App
