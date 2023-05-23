const [citaArreglo, setCitaArreglo] = useState(citas)

const eliminarCita = (nombreAlumno)=>{
    const newCitas = citaArreglo.filter(cita => cita.nombreAlumno !== nombreAlumno);
    setCitaArreglo(newCitas);
 }