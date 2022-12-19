import logoAdalab from '../images/logo-adalab.png';
function Footer (){
    return ( 
    <footer className='footer'>
    <a href='./index.html'>
      <p className='footer__paragraph'>
        Algebraic profile-cards &copy;2022
      </p>
    </a>
    <a href='https://adalab.es/' target='blank'>
      <img className='footer__img' src={logoAdalab} alt='Logo Adalab' />
    </a>
  </footer>)
}

export default Footer;