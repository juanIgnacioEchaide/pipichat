import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { gql } from "@apollo/client";
import { ApolloProvider, useQuery,useMutation } from '@apollo/react-hooks';

/* postea mensajes */

const CREATE_MESSAGE = gql`
  mutation CreateMessage($input: createMessageInput) {
    createMessage(input: $input) {
        author,
        text
     
    }
  }
`;

const GET_CHATS = gql`{ 
    getChats{
        messages{
            id
            author
            text
        }

}}
`

/* trae los mensajes */


const ChatInput = props => {

    const{loading,error,data}=useQuery(GET_CHATS)

    console.log('todo los chats',data); 
    console.log('los mensajes',data);

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
                author:'me',
                text: enteredMessage,
                chatID:'5e18d107c7eb83098cba5893'
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

{/*    {data==null? <p> no anda</p>:data.getChats[1].messages.map(item=><p>{item.text}</p>)}  */}




     {data==null? <p>no anda</p> :data.getChats[1].messages.map(msg =>



                <div id="messageTab" className='column bg-dark text-white p-2 m-1 rounded w-50 shadow'>
                    <p id="userName" className="ml-3">{msg.author}</p>
                    <p>{msg.text}</p>

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

