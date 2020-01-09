import React from 'react';
import Add from '../../assets/AddUser.png';
import PropTypes from 'prop-types';

const AddNewChat = props => {
    return (
        <div>
            <img style={{height:'10vh'}} src={Add}/>
        </div>
    );
};

AddNewChat.propTypes = {
    
};

export default AddNewChat;