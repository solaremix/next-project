export const citasPro = [
   {nombreprof: "Alejandro Jimenez", especialidad: "Ingenieria de Software",
   fecha: '2023-06-12', curso:"Prograweb"},
   {nombreprof: "Juan Perez", especialidad: "Ingenieria de Software",
   fecha: '2023-06-30', curso:"Prograweb"},
   {nombreprof: "Juan Perez", especialidad: "Ingenieria de Software",
   fecha: '2023-06-12', curso:"POO"}
 ]   
 const save1 = (cita) =>{
    citasPro.push(cita)
 }
 
 const getAll1 = () =>{
    return citasEst;
 }
 
 const citasEstApi = {save1, getAll1}
 
 export default citasEstApi;