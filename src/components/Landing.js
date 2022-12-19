import { NavLink } from 'react-router-dom';
//import '../styles/App.scss';
import logo from '../images/logo-coding-time-2.png';
function Landing() {
  return (
    <div className="main__index__wrap1">
      <div className="main__index__wrap2">
        <a href="./index.html">
          <img
            className="headerlanding__img"
            src={logo}
            alt="Logo Awesome Profile Cards"
          />
        </a>
        <section className="title">
          <h1 className="title__h1">Crea tu tarjeta de visita</h1>
          <p className="title__text">
            Crea mejores contactos profesionales de forma fácil y cómoda
          </p>
        </section>
        <section className="options">
          <ul className="options__list">
            <li className="options__list--item options__list--design">
              <i className="icon fa-regular fa-object-ungroup"></i> Diseña
            </li>
            <li className="options__list--item">
              <i className="icon fa-regular fa-keyboard"></i> Rellena
            </li>
            <li className="options__list--item options__list--share">
              <i className="icon fa-solid fa-share-nodes"></i> Comparte
            </li>
          </ul>
        </section>
      </div>

      <section className="start">
        <NavLink className="start__link" to="/card">
          Comenzar
        </NavLink>
      </section>
    </div>
  );
}

export default Landing;
