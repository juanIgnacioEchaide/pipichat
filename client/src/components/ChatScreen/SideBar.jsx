import React from 'react';
import './SideBar.css'
import { useState } from 'react';
import ChatList from './ChatList';
import AddNewChat from './AddNewChat';
/* import {MdDone} from 'react-icons/md'; 
import {MdDoneAll}  from 'react-icons/md';  */

const SideBar = props => {


    return (

      
        <div id='SideBarContainer'> 
    
            <div>
                <AddNewChat setChat={props.setChat}/>
                <ChatList chat={props.chat}/>

            </div>
        </div>
    );
};

SideBar.propTypes = {

};

export default SideBar;