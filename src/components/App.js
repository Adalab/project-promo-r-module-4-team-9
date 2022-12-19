import '../styles/App.scss';
import { useState } from 'react';
import dataApi from '../services/dataApi';
import Card from './Card';
import Footer from './Footer';
import Landing from './Landing';
import { Routes, Route } from 'react-router-dom';
import ls from '../services/localStorage';

function App() {
  //VARIABLES DE ESTADO
  const [dataResult, setDataResult] = useState({});
  const [classCollaDesign, setClassCollaDesign] = useState('');
  const [classCollaFill, setClassCollaFill] = useState('collapsed');
  const [classCollaShare, setClassCollaShare] = useState('collapsed');
  const [classArrowDesign, setClassArrowDesign] = useState('arrow-up');
  const [classArrowFill, setClassArrowFill] = useState('arrow-down');
  const [classArrowShare, setClassArrowShare] = useState('arrow-down');
  const [user, setUser] = useState(
    ls.get('user', {
      palette: '1',
      name: '',
      job: '',
      phone: '',
      email: '',
      linkedin: '',
      github: '',
      photo: '',
    })
  );
  const [classPalette, setClassPalette] = useState(ls.get('palette', 'palette-1'));
  const [classCollaCreateCard, setClassCollaCreateCard] = useState('collapsed');
  const [fileImage, setFileImage] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  //FUNCIONES DE EVENTOS (HANDLE)
  const handleImage = (imageData) => {
    setFileImage(imageData);
    ls.set('user', { ...user, photo: imageData });
    setUser({ ...user, photo: imageData });
  };

  function handleClickDesign(event) {
    event.preventDefault();
    if (classCollaDesign === 'collapsed') {
      setClassCollaDesign('');
    }
    setClassArrowDesign('arrow-up');
    //Hide fill section and update arrow direction
    setClassCollaFill('collapsed');
    setClassArrowFill('arrow-down');
    //Hide share section and update arrow direction
    setClassCollaShare('collapsed');
    setClassArrowShare('arrow-down');
  }

  function handleClickFill(event) {
    event.preventDefault();
    if (classCollaFill === 'collapsed') {
      setClassCollaFill('');
    }
    setClassArrowFill('arrow-up');
    //Hide design section and update arrow direction
    setClassCollaDesign('collapsed');
    setClassArrowDesign('arrow-down');
    //Hide share section and update arrow direction
    setClassCollaShare('collapsed');
    setClassArrowShare('arrow-down');
  }

  function handleClickShare(event) {
    event.preventDefault();
    if (classCollaShare === 'collapsed') {
      setClassCollaShare('');
    }
    setClassArrowShare('arrow-up');
    //Hide design section and update arrow direction
    setClassCollaDesign('collapsed');
    setClassArrowDesign('arrow-down');
    //Hide fill section and update arrow direction
    setClassCollaFill('collapsed');
    setClassArrowFill('arrow-down');
  }

  function handleInput(event) {
    const inputName = event.currentTarget.name;
    const inputValue = event.currentTarget.value;
    ls.set('user', { ...user, [inputName]: inputValue });
    setUser({ ...user, [inputName]: inputValue });
    if (inputName === 'palette' && inputValue === '1') {
      setClassPalette('palette-1');
      ls.set('palette', 'palette-1');
    }
    if (inputName === 'palette' && inputValue === '2') {
      setClassPalette('palette-2');
      ls.set('palette', 'palette-2');
    }
    if (inputName === 'palette' && inputValue === '3') {
      setClassPalette('palette-3');
      ls.set('palette', 'palette-3');
    }
    
  }
  function handleCreateBtnClick(event) {
    event.preventDefault();
    dataApi(user).then((data) => {
      if (data.success) {
        setDataResult(data);
        setClassCollaCreateCard('');
        setErrorMsg('');
      }else{
        setErrorMsg('Tienes que rellenar todos los campos');
      }
    });
  }
  //Reset button
  const handleResetBtn = () => {
    //Empty variable
    setUser({
      palette: '1',
      name: '',
      job: '',
      phone: '',
      email: '',
      linkedin: '',
      github: '',
      photo: '',
    });
    //Change palette and open design section
    setClassPalette('palette-1');
    setClassCollaDesign('');
    //Close fill section, update arrow direction
    setClassCollaFill('collapsed');
    setClassArrowFill('arrow-down');
    //Close share section, update arrow direction
    setClassCollaShare('collapsed');
    setClassArrowShare('arrow-down');
    setClassCollaCreateCard('collapsed');
    //Reset image;
    setFileImage('');
    setErrorMsg('');
    ls.set('user', {
      palette: '1',
      name: '',
      job: '',
      phone: '',
      email: '',
      linkedin: '',
      github: '',
      photo: '',
    })
    ls.set('palette', 'palette-1');
  };

  return (
    <div className='body__profilecards'>
      <Routes>
        <Route
          path='/card'
          element={
            <Card
              user={user}
              dataResult={dataResult}
              handleInput={handleInput}
              handleClickDesign={handleClickDesign}
              classArrowDesign={classArrowDesign}
              handleClickFill={handleClickFill}
              classArrowFill={classArrowFill}
              classCollaFill={classCollaFill}
              handleClickShare={handleClickShare}
              classArrowShare={classArrowShare}
              classCollaShare={classCollaShare}
              handleCreateBtnClick={handleCreateBtnClick}
              classCollaCreateCard={classCollaCreateCard}
              handleResetBtn={handleResetBtn}
              classPalette={classPalette}
              classCollaDesign={classCollaDesign}
              handleImage={handleImage}
              fileImage={fileImage}
              errorMsg={errorMsg}
            ></Card>
          }
        />

        <Route path='/' element={<Landing></Landing>} />
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
