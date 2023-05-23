import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import './style.css'

const TextArea = ({props}) => {
  return (
    <>

      <FloatingLabel controlId="floatingTextarea2" label={props}>
        <Form.Control className='caja'
          as="textarea"
          placeholder="Comentario"
          style={{ height: '150px'}}
        />
      </FloatingLabel>
    </>
  );
}

export default TextArea;