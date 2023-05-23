



let alumnos = []

 const save = (alumno) =>{
    alumnos.push(alumno)
 }

 const getAll = () =>{
    return alumnos;
 }

 const AlumnoApi = {save, getAll}

 export default AlumnoApi;