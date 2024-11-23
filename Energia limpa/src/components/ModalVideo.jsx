import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react';

const ModalVideo = ({ videoUrl }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="info" onClick={() => setShow(true)}>Assistir Vídeo</Button>
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Energia Limpa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="100%" height="315" src={videoUrl} frameBorder="0" allowFullScreen></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalVideo;