export const citas = [
   {nombreprof: "Alejandro Jimenez", especialidad: "Ingenieria de Software",
   fecha: '2020-06-12', curso:"Prograweb"},
   {nombreprof: "Juan Perez", especialidad: "Ingenieria de Software",
   fecha: '2020-05-30', curso:"Prograweb"},
   {nombreprof: "Juan Perez", especialidad: "Ingenieria de Software",
   fecha: '2020-06-12', curso:"POO"},
   
]

const save = (cita) =>{
   citas.push(cita)
}

const getAll = () =>{
   return citas;
}

const CitaApi = {save, getAll}

export default CitaApi;