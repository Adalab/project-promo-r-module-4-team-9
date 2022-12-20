import sword from '../images/espada-3.png';

function Share(props) {
  return (
    <fieldset className="share">
      <section
        className="share__wrap1 js-share-clicker"
        onClick={props.handleClickShare}
      >
        <legend className="share__wrap1--legend">
          <i className="legend__icon fa-solid fa-share-nodes"></i>
          Comparte
        </legend>
        <img
          className={`js-arrow-share legend__scroll ${props.classArrowShare}`}
          src={sword}
          alt="Icono desplegable"
        />
      </section>
      <div className={`js-share-wrap-all ${props.classCollaShare}`}>
        <section className="js-share__wrap2 share__wrap2">
          <button
            className="js-create__btn share__wrap2--button"
            id="created-card"
            type="submit"
            onClick={props.handleCreateBtnClick}
          >
            <i className="share__card fa-regular fa-address-card"></i>
            Crear tarjeta
          </button>
          <p className="share__wrap2--errormessage">{props.errorMsg}</p>
        </section>
        <div className="line"></div>
        <section
          className={`js-share__wrap3 share__wrap3 ${props.classCollaCreateCard}`}
        >
          <h3 className="share__wrap3--h3">La tarjeta ha sido creada:</h3>
          <a
            className="share__wrap3--link js-new_cardlink"
            href={props.dataResult.success ? props.dataResult.cardURL : '#'}
            target="_blank"
          >
            {props.dataResult.success
              ? props.dataResult.cardURL
              : props.dataResult.error}
          </a>
          <a
            className="share__wrap3--twitter twitter-share-button js-twitter-share-button"
            href="https://twitter.com/intent/tweet?text=¡Mirad%20mi%20nueva%20tarjeta!%20&hashtags=CodingTime,Adalab,PromoRadia&url="
            data-size="large"
            target="_blank"
          >
            <i className="fa-brands fa-twitter share__wrap3--twitter--icon"></i>
            Compartir en twitter
          </a>
          <div className="line"></div>
        </section>
      </div>
    </fieldset>
  );
}

export default Share;
