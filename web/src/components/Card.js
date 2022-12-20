import Header from './Header';
import CardPreview from './CardPreview';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';

function Card(props) {
  return (
    <>
      <Header></Header>
      <main className='main'>
        <CardPreview
          handleResetBtn={props.handleResetBtn}
          classPalette={props.classPalette}
          user={props.user}
          fileImage={props.fileImage}
        ></CardPreview>
        <section className='main__form'>
          <form className='js-form' action='' method='POST'>
            <Design
              user={props.user}
              handleInput={props.handleInput}
              handleClickDesign={props.handleClickDesign}
              classArrowDesign={props.classArrowDesign}
              classCollaDesign={props.classCollaDesign}
            ></Design>
            <Fill
              user={props.user}
              handleClickFill={props.handleClickFill}
              classArrowFill={props.classArrowFill}
              classCollaFill={props.classCollaFill}
              handleInput={props.handleInput}
              handleImage={props.handleImage}
              fileImage={props.fileImage}
            ></Fill>
            <Share
              handleClickShare={props.handleClickShare}
              classArrowShare={props.classArrowShare}
              classCollaShare={props.classCollaShare}
              handleCreateBtnClick={props.handleCreateBtnClick}
              classCollaCreateCard={props.classCollaCreateCard}
              dataResult={props.dataResult}
              errorMsg={props.errorMsg}
            ></Share>
          </form>
        </section>
      </main>
    </>
  );
}
export default Card;
