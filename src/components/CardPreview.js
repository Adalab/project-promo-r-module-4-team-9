function CardPreview(props) {
  return (
    <section className='js-card card'>
      <div className='card__wrap'>
        <button
          type='reset'
          className='js-card__button card__button'
          onClick={props.handleResetBtn}
        >
          <span className='card__button__reset__icon'>
            <i className='fa-sharp fa-solid fa-trash-can'></i>
          </span>
          Reset
        </button>
        <article
          className={`js-card__article card__article ${props.classPalette}`}
        >
          <div className='js-profile profile'>
            <h1 className='js-profile__name profile__name'>
              {props.user.name || 'Nombre apellido'}
            </h1>
            <p className='js-profile__text profile__text'>
              {props.user.job || 'Front-end developer'}
            </p>
          </div>
          <div
            className='js__profile-image js-image image'
            style={
              props.user.photo
                ? { backgroundImage: `url(${props.user.photo})` }
                : null
            }

            // style={
            //   props.fileImage
            //     ? { backgroundImage: `url(${props.fileImage})` }
            //     : null
            // }
          ></div>
          <nav className='js-nav nav'>
            <ul className='js-nav__ul nav__ul'>
              <li className='js-nav__li1 nav__li'>
                <a
                  href={props.user.phone ? `tel:${props.user.phone}` : ''}
                  target='_blank'
                  className='js-nav__mobile nav__icon'
                >
                  <i className='fa-solid fa-mobile-screen-button'></i>
                </a>
              </li>
              <li className='js-nav__li2 nav__li'>
                <a
                  href={props.user.email ? `mailto:${props.user.email}` : ''}
                  target='_blank'
                  className='js-nav__mail nav__icon'
                >
                  <i className='fa-regular fa-envelope'></i>
                </a>
              </li>
              <li className='js-nav__li3 nav__li'>
                <a
                  href={
                    props.user.linkedin
                      ? `https://www.linkedin.com/in/${props.user.linkedin}`
                      : '#'
                  }
                  target='_blank'
                  className='js-nav__linkedin nav__icon'
                >
                  <i className='fa-brands fa-linkedin-in'></i>
                </a>
              </li>
              <li className='js-nav__li4 nav__li'>
                <a
                  href={
                    props.user.github
                      ? `https://github.com/${props.user.github}`
                      : '#'
                  }
                  target='_blank'
                  className='js-nav__github nav__icon'
                >
                  <i className='fa-brands fa-github-alt'></i>
                </a>
              </li>
            </ul>
          </nav>
        </article>
      </div>
    </section>
  );
}
export default CardPreview;
