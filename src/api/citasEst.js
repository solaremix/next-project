   export const citasEst = [
      {nomEest: "Pf.Franco Sotelo", especialidad: "Ingenieria de Sistemas",
      fecha: '2023-06-02', curso:"Prograweb"},
   {nomEest:"Pf.Romulo Juarez", especialidad:"Ingenieria de Sistemas", fecha:'2023-06-05', curso:"Prograweb"},
   
   ]   
   const save1 = (cita) =>{
      citasEst.push(cita)
   }
   
   const getAll1 = () =>{
      return citasEst;
   }
   
   const citasEstApi = {save1, getAll1}
   
   export default citasEstApi;