import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Add from '../../assets/AddUser.png';
import './AddNewChatStyle.css'
import PropTypes from 'prop-types';


{/* <div style={{marginTop:10,display:'flex',alignItems:'center'}}>
            <img style={{height:'10vh'}} src={Add}/>
</div>*/}

const AddNewChat = props => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log('AddeNewChat', props.setChat)

  const [enteredSearch, setEnteredSearch] = useState();

  return (

    <>
      <div onClick={handleShow}>
        <div style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
          <img style={{ height: '10vh' }} src={Add} />
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>

        <Modal.Body>Search: </Modal.Body>
        <input onChange={event => { setEnteredSearch(event.target.value) }} ></input>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            x
          </Button>
          {/*       <Button variant="secondary" onClick={switchChatHandler}>
            Add
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
};



AddNewChat.propTypes = {

};

export default AddNewChat;