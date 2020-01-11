import React from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const WriteMessage = props => {
    return (
        <div>
             <footer>
                    <input size="59" className="rounded" onChange={event => setEnteredMessage(event.target.value)}>
                    </input>
                    <Button onClick={() => createMessage()}>Enviar</Button>
                </footer>
        </div>
    );
};

WriteMessage.propTypes = {
    
};

export default WriteMessage;