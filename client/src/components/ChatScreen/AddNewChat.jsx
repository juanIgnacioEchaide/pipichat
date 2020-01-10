import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Add from '../../assets/AddChat.png';
import './AddNewChatStyle.css';
import PropTypes from 'prop-types';



const AddNewChat = props => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  console.log('ehh funcion', props.addChatHandler);



  return (

    <>
      <div onClick={handleShow}>
        <div style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
          <img style={{ height: '7vh' }} src={Add} />
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>

        <Modal.Body>Search: </Modal.Body>
        <input onChange={event => { props.setEnteredSearch(event.target.value) }} ></input>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            x
          </Button>
          <Button variant="secondary"
            onClick={() => {
              handleClose();
              props.addChatHandler([{ id: Math.random().toString(), name: props.enteredSearch, lastMsg: '121hs' }]);
            }}
/* 
            onKeyPress={} */
          >
           
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  );
};



AddNewChat.propTypes = {

};

export default AddNewChat;