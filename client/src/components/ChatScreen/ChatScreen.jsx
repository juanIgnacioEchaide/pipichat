import React,{useState, useEffect} from 'react';
import './ChatScreen.css';
import UserCard from './UserCard.jsx';
import SideBar from './SideBar';
import ChatHeader from './ChatHeader';
import ChatContent from './ChatContent';
  
const ChatScreen = props => {

  const[chat,setChat]=useState([]);

 /*  setChat(data); */
  return (
    <div className="container-fluid h-100">
      <div className="row h-100">
        <div className="col-3">
          <div className="row userCardContainerRow">
            <div className="col-12 p-0 pl-sm-0 pl-md-3 pl-lg-4 mh-100 userCardContainer">
              <UserCard />
            </div>
          </div>
          <div className="row chatListContainerRow">
            <div className="col-12 chatListContainer">
              <SideBar chat={chat} setChat={setChat} />
            </div>
          </div>
        </div>
        <div className="col-9">
          <div className="row chatHeaderContainerRow">
            <div className="col-12 pr-5 chatHeaderContainer">
              <ChatHeader />
            </div>
          </div>
          <div className="row chatContentContainerRow">
            <div className="col-12 chatContentContainer">
              <ChatContent props={chat} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ChatScreen.propTypes = {

};

export default ChatScreen;

/* mutation createUser($email: String!, $password: String!, $username: String!) {
  createUser (username: $name, password: $password, email: $email)
  user {
    id
    username
    email
    password
  }
} */