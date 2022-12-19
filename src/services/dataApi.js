const dataApi = (data) =>{
    return fetch('https://dev.adalab.es/api/card', {
        method: 'POST', 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
        })
    .then ((response) => response.json())
    .then ((data)=> {
        return data;

    });
}
 export default dataApi;