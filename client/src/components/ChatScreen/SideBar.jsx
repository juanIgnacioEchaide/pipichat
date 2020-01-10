import React from 'react';
import './SideBar.css'
import { useState } from 'react';
import ChatList from './ChatList';
import AddNewChat from './AddNewChat';
/* import {MdDone} from 'react-icons/md'; 
import {MdDoneAll}  from 'react-icons/md';  */

const SideBar = props => {

    console.log('sideBar',props.chat)

    const [enteredSearch, setEnteredSearch] = useState('busco');

    const addChatHandler=()=>{
      props.setChat(currentChatList=> 
        [...currentChatList,{id:Math.random().toString(),name:enteredSearch,lastMsg:'hh:mm:ss'}]);
    } 
    
    return (

    <div id='SideBarContainer'> 
    
            <div>
                <AddNewChat enteredSearch={enteredSearch} addChatHandler={addChatHandler} setEnteredSearch={setEnteredSearch} setChat={props.setChat}/>
                <ChatList chat={props.chat}/>

            </div>
        </div>
    );
};

SideBar.propTypes = {

};

export default SideBar;