import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { gql } from "@apollo/client";
import { useMutation } from '@apollo/react-hooks';


const CREATE_MESSAGE = gql`
  mutation CreateMessage($input: createMessageInput) {
    createMessage(input: $input) {
        author,
      text
     
    }
  }
`;

var author = "andy";
var text = "hope is a good thing";
var chatID = "5e18d107c7eb83098cba5893";
const ChatInput = props => {

    const hour = new Date().getHours().toString()
    const minute = new Date().getMinutes().toString()
    const seconds = new Date().getSeconds().toString()
    const timeStamp = hour + ':' + minute + ':' + seconds + ' hs'


    console.log(timeStamp);

    const [enteredMessage, setEnteredMessage] = useState('');
    const [message, setMessage] = useState(['']);

    const [createMessage] = useMutation(CREATE_MESSAGE, {
        variables: {
            input: {
                author,
                text: enteredMessage,
                chatID
            }
        },
        errorPolicy: "all"
    })


    const sendMessageHandler = () => {
        setMessage(currentMessages => [...currentMessages, { id: Math.random().toString(), user: 'You', content: enteredMessage, reaction: '' }])
        console.log(message);
        setEnteredMessage('');
    }

    const [checked, setChecked] = useState(false);

    const checkedHandler = () => {
        setChecked(!checked);
    }



    return (
        <div style={{ marginBottom: '260px' }}>
            {message.map(msg =>

                <div id="messageTab" className='column bg-dark text-white p-2 m-1 rounded w-50 shadow'>
                    <p id="userName" className="ml-3">{msg.user}</p>
                    <p>{msg.content}</p>

                    <div id="notification">

                        {checked == false ?
                            <div className="row mw-100 ml-0">
                                <p className="col-10 mb-0 pl-2">{timeStamp}</p>
                                <p className="col-2 mb-0" >llego</p>
                            </div> :
                            <div className="row mw-100  ml-0">
                                <p className="col-10 mb-0 pl-2">{timeStamp}</p>
                                <p className="col-2 mb-0" >lei</p>
                            </div>}
                    </div>

                    <Button onClick={checkedHandler}>Notif</Button>
                </div>


            )}
            <div style={{
                position: 'fixed',
                bottom: 0,
                backgroundColor: '#F2F3DE',
                marginLeft: '4px'
            }}>
                <footer>
                    <input size="59" className="rounded" onChange={event => setEnteredMessage(event.target.value)}>
                    </input>
                    <Button onClick={() => createMessage()}>Enviar</Button>
                </footer>
            </div>

        </div>
    );
};

ChatInput.propTypes = {

};

export default ChatInput;

