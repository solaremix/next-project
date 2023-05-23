let docentes = []

 const save = (docente) =>{
    docentes.push(docente)
 }

 const getAll = () =>{
    return docentes;
 }

 const DocenteApi = {save, getAll}

 export default DocenteApi;