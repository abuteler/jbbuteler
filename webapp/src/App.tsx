import { useEffect } from 'react';
import { Routes, Route, useLocation, NavLink } from 'react-router-dom';
import ReactGA from 'react-ga4';
import VistaUnica from './views/VistaUnica'
import './App.scss';
import footer_logo from './assets/9S_footer.png';

const TRACKING_ID = "AW-1005728213"; // your Measurement ID

function App() {
  ReactGA.initialize([{
    trackingId: TRACKING_ID,
  }]);

  const { pathname } = useLocation();

  useEffect(()=>{
    ReactGA.send({ hitType: "pageview", page: pathname });
    ReactGA.event({ category: "Navigation", action: "Page Change", label: pathname });
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
