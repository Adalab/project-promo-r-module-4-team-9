// Fichero src/components/ImageReader.js
import { useRef } from 'react';
import Compressor from 'compressorjs';

/*
El orden cronológico en el que se ejecuta este componente es:
- Se renderiza la primera vez
  - Se crea la referencia fileElement
  - Se crea el lector de ficheros fileReader
  - Se pinta el input file
- Cuando la usuaria selecciona una imagen:
  - Se ejecuta la función handleFile
    - Esta función ejecuta fileReader.readAsDataURL(selectedFile)
    - La función readAsDataURL lee el contenido de la imagen
    - La función readAsDataURL es asíncrona. Cuando termine lanzará un evento 'load'.
- Pasados unos milisegundos, cuando se lance el evento 'load':
  - Se ejecutará la función getImage
    - Que subirá los datos de la imagen por lifting
*/

const ImageReader = (props) => {
  // Creamos una referencia al input file para poder leer su contenido más tarde
  const fileElement = useRef();

  // Creamos un lector de ficheros
  // FileReader es una funcionalidad nativa de JavaScript, búscala en Internet si te atreves
  const fileReader = new FileReader();

  // Cuando la usuaria selecciona una imagen se ejecuta esta función
  const handleFile = () => {
    // fileElement.current es literalmente el input file
    // Sacamos su propiedad files que es un array con todas las imágenes seleccionadas por la usuaria
    // Como solo queremos la primera imagen seleccionada guardamos el primer elemento de files
    const selectedFile = fileElement.current.files[0];
    //Function to compress selectedFile

    new Compressor(selectedFile, {
      convertSize: 50000,
      maxHeight: 400,
      maxWidth: 400,
      // The compression process is asynchronous,
      // which means you have to access the `result` in the `success` hook function.
      success(result) {
        // Si la usuaria ha seleccionado al menos una imagen, selectedFile será diferente de undefined
        if (result) {
          // Le decimos al lector de ficheros que lea el fichero seleccionado por la usuaria
          fileReader.readAsDataURL(result);
          // Cuando esta acción termine, fileReader lanzará el evento 'load'
        }
      },
      error(err) {
        console.log(err.message);
      },

    });


  };

  // Esta función se ejecuta cuando fileReader lanza el evento 'load'
  const getImage = () => {
    // Cuando la imagen ya esté lista en fileReader.result tendremos su contenido
    // Hacemos lifting de este contenido hacia arriba
    props.handleImage(fileReader.result);
  };

  // Escuchamos el evento load de fileReader y cuando se lance lo manejamos con la función getImage
  fileReader.addEventListener('load', getImage);

  return (
    <>
      <label className='fill__label'>Imagen de perfil</label>
      <div className='js-photo fill__container'>
        <label htmlFor='photo' className='fill__button'>
          Añadir imagen
        </label>
        <input
          ref={fileElement}
          type='file'
          className='js__profile-upload-btn fill__input fill__input--hide'
          id='photo'
          name='photo'
          onChange={handleFile}
          required
        />
        <div
          className='js__profile-preview fill__square'
          style={{ backgroundImage: `url(${props.fileImage})` }}
        ></div>
      </div>
    </>
  );
};

export default ImageReader;
