const dataApi = (data) => {
  return fetch('//localhost:4000/card', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};
export default dataApi;

//Crear un fetch GET cuando el usuario hace click en la URL para que nos devuelva el HTML