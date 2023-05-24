export const citasEst = [
    {nomEest: "Est.Franco Sotelo", especialidad: "Ingenieria de Sistemas",
    fecha: '2020-04-02', curso:"Prograweb"},
    {nomEest:"Est.Romulo Juarez", especialidad:"Ingenieria de Sistemas", fecha:'2020-04-02', curso:"Prograweb"}
 ]
 
 const save1 = (cita) =>{
    citasEst.push(cita)
 }
 
 const getAll1 = () =>{
    return citasEst;
 }
 
 const citasEstApi = {save1, getAll1}
 
 export default citasEstApi;