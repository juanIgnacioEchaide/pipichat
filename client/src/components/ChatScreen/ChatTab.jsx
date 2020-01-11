import React from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const ChatTab = props => {
    return (
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
                        <p className="col-2 mb-0" >lei <Check name="check" /></p>
                    </div>}
            </div>

            <Button onClick={checkedHandler}>Notif</Button>
        </div>

    );
};

ChatTab.propTypes = {

};

export default ChatTab;