import React,{useState} from 'react';
import userImg from '../../assets/user_logo.png';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import {fromError} from 'apollo-link-error';
import { useEffect } from 'react';
import { ApolloProvider, useQuery } from "@apollo/react-hooks";
import {gql} from "@apollo/client";

const GET_USERS = gql`
{
  getUsers{
    name
  }
}
`;

const ChatList = props => {

    const { loading, error, data } = useQuery(GET_USERS);

    const [checked, setChecked] = useState(false)
    const checkedHandler = () => {
        setChecked(!checked);
    }

    console.log('chatList',data);

    return (
        <div>
            {data==null? <p>no anda</p>: data.getUsers.map(item =>
                <div id='chatTab' className='rounded text-white'>
                    <img id='tabUserPic' src={userImg} className="mr-2" />
                    <h6 id='userName'>{item.name}</h6>
                    <div className='row'>
{/* 
                        <p className='lastMsg'>{item.lastMsg}</p> */}
                        <div className='ml-2'>
                            {checked == false ? <p>llego</p> : <p>lei</p>}
                        </div>
                    </div>
                </div>)}
       {/*      <Button onClick={checkedHandler}>Notif</Button> */}
        </div>
    );
};

ChatList.propTypes = {

};


export default ChatList;