import './style.css';

const Chip = ({nombre, fecha}) => {
    return(
        <div className='cont'>
            <div className='icono'>
                <img src='letra.png'></img>
            </div>
            <div className='txts'>
                <span className='nombre'>{nombre}</span>
                <br></br>
                <span className='fecha'>{fecha}</span>
            </div>
        </div>
    )
}

export default Chip;