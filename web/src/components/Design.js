import sword from '../images/espada-3.png';

function Design(props) {
  /*const handleInput = () => {
    props.handleInput();
  };*/

  return (
    <fieldset className="design">
      <section
        className="design__wrap1 js-design-clicker"
        onClick={props.handleClickDesign}
      >
        <legend className="design__wrap1--legend">
          <i className="legend__icon fa-regular fa-object-ungroup"></i>
          Diseña
        </legend>
        <img
          className={`js-arrow-design legend__scroll ${props.classArrowDesign}`}
          src={sword}
          alt="Icono desplegable"
        />
      </section>
      <section
        className={`js-design__wrap2 design__wrap2 ${props.classCollaDesign}`}
      >
        <h3 className="color">Colores</h3>
        <section className="palettes">
          <div className="palettes__1">
            <input
              className="palettes__1--radio"
              id="palette1"
              type="radio"
              name="palette"
              value="1"
              required
              checked={props.user.palette === '1'}
              onChange={props.handleInput}
            />
            <div className="palettes__1--color dark-green"></div>
            <div className="palettes__1--color dirty-blue"></div>
            <div className="palettes__1--color hospital-green"></div>
          </div>
          <div className="palettes__2">
            <input
              className="palettes__2--radio"
              id="palette2"
              type="radio"
              name="palette"
              value="2"
              required
              checked={props.user.palette === '2'}
              onChange={props.handleInput}
            />
            <div className="palettes__2--color dried-blood"></div>
            <div className="palettes__2--color rusty-red"></div>
            <div className="palettes__2--color tomato"></div>
          </div>
          <div className="palettes__3">
            <input
              className="palettes__3--radio"
              id="palette3"
              type="radio"
              name="palette"
              value="3"
              required
              checked={props.user.palette === '3'}
              onChange={props.handleInput}
            />
            <div className="palettes__3--color slate"></div>
            <div className="palettes__3--color faded-orange"></div>
            <div className="palettes__3--color light-grey-blue"></div>
          </div>
        </section>
      </section>
      <div className="line"></div>
    </fieldset>
  );
}
export default Design;
