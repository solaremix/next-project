import '../Sidebar/style.css'

const Sidebar = () =>{
    return(
        <div className="sidebar">
            <ul>
                <li><a href="/pagprin_docente">Principal</a></li>
                <br></br>
                <li><a href="/registro">Perfil</a></li>
                <br></br>
                <li><a href="/Cita">Citas</a></li>
            </ul>
        </div>
    )
}

export default Sidebar;