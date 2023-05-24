export const citas = [
   {nombreprof: "Alejandro Jimenez", especialidad: "Ingenieria de Software",
   fecha: '2020-04-02', curso:"Prograweb"},
   {nombreprof: "Juan Perez", especialidad: "Ingenieria de Software",
   fecha: '2023-06-02', curso:"Prograweb"},
   {nombreprof: "Juan Perez", especialidad: "Ingenieria de Software",
   fecha: '2023-02-01', curso:"POO"}
]

const save = (cita) =>{
   citas.push(cita)
}

const getAll = () =>{
   return citas;
}

const CitaApi = {save, getAll}

export default CitaApi;