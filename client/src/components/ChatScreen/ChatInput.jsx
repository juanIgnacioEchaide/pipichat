import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const ChatInput = props => {
    const [enteredMessage, setEnteredMessage] = useState('');

    const [message, setMessage] = useState([]);
    console.log(enteredMessage)

    const sendMessageHandler = () => {
        setMessage(currentMessages => [...currentMessages, { id: Math.random().toString(), user: 'You', content: enteredMessage, reaction: '' }])
        console.log(message);
    }

    const [checked, setChecked] = useState(false);

    const checkedHandler = () => {
        setChecked(!checked);
    }



    return (
        <div>
            {message.map(msg =>

                <div id="messageTab" className='column bg-dark text-white p-2 m-1 rounded w-50'>
                    <p id="userName" className="ml-3">{msg.user}</p>
                    <p>{msg.content}</p>

                    <div id="notification">

                        {checked == false ?
                            <div className="row mw-100 ml-0">
                                <p className="col-10 mb-0 pl-2">dd/mm/aaaa  hh:mm:ss</p>
                                <p className="col-2 mb-0" >llego</p>
                            </div> :
                            <div className="row mw-100  ml-0">
                                <p className="col-10 mb-0 pl-2">dd/mm/aaaa  hh:mm:ss</p>
                                <p className="col-2 mb-0" >lei </p>
                            </div>}

                       
                    </div>

                        <Button onClick={checkedHandler}>Notif</Button>
                </div>


            )}
            <input onChange={event => setEnteredMessage(event.target.value)}></input><Button onClick={sendMessageHandler}>Enviar</Button>

        </div>
    );
};

ChatInput.propTypes = {

};

export default ChatInput;