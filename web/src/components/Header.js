import logo from '../images/logo-coding-time-2.png';
import { NavLink } from 'react-router-dom';
function Header() {
  return (
    <header className="headerprofilecards">
      <NavLink className="footer__menu-link" to="/">
        <img
          className="headerprofilecards__img"
          src={logo}
          alt="Logo Awesome Profile Cards"
        />
      </NavLink>
    </header>
  );
}

export default Header;
