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
        <div style={{ marginTop: 10, display: 'flex', marginLeft:80 }}>
          <img style={{ height: '7vh' }} src={Add} />
        </div>
      </div>

      <Modal  show={show} onHide={handleClose}>

        <Modal.Body className="rounded text-white" style={{
          backgroundColor:'#F26419'
        }}>Search </Modal.Body> 
        <input onChange={event => { props.setEnteredSearch(event.target.value) }} ></input>
        <Modal.Footer>
        
          <Button variant="secondary"
            onClick={() => {
              handleClose();
              props.addChatHandler([{ id: Math.random().toString(), name: props.enteredSearch, lastMsg: '121hs' }]);
            }}>
           Add
          </Button>
          <Button   onClick={()=>handleClose()}>Cancel</Button>
        </Modal.Footer>
      </Modal>

    </>
  );
};



AddNewChat.propTypes = {

};

export default AddNewChat;