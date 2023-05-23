

export const citas = [
    {nombreprof: "Alejandro Jimenez", especialidad: "Ingenieria de Software",
    fecha: new Date('2020-04-02'), curso:"Prograweb"}
]

 const save = (cita) =>{
    citas.push(cita)
 }

 const getAll = () =>{
    return citas;
 }

 const CitaApi = {save, getAll}

 export default CitaApi;