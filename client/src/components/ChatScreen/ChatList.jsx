import React,{useState} from 'react';
import userImg from '../../assets/user_logo.png';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const ChatList = props => {



    const [chats = [
        { id: '0', name: 'Diego Jujuy', lastMsg: 'hoy 10.45' },
        { id: '1', name: 'Maty Jujuy', lastMsg: 'ayer 2.45' },
        { id: '2', name: 'LoPresti', lastMsg: 'hoy 16.28' },
        { id: '3', name: 'PipiMisterioso', lastMsg: 'mier 20.55' },
        { id: '4', name: 'Jijiji', lastMsg: 'hoy 12.00' }
    ]] = useState();

    const [checked, setChecked] = useState(false)
    const checkedHandler = () => {
        setChecked(!checked);
    }

    console.log('chatList',props.chat);

    return (
        <div>
            {props.chat.map(item =>
                <div id='chatTab' className='rounded text-white'>
                    <img id='tabUserPic' src={userImg} className="mr-2" />
                    <h6 id='userName'>{item.name}</h6>
                    <div className='row'>

                        <p className='lastMsg'>{item.lastMsg}</p>
                        <div className='ml-2'>
                            {checked == false ? <p>llego</p> : <p>lei</p>}
                        </div>
                    </div>
                </div>)}
            <Button onClick={checkedHandler}>Notif</Button>
        </div>
    );
};

ChatList.propTypes = {

};

export default ChatList;