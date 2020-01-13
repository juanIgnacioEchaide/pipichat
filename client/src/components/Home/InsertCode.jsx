import React from 'react';
import PropTypes from 'prop-types';
import ReactCodeInput from 'react-code-input';
import {Spinner} from 'react-bootstrap';


const InsertCode = props => {
    return (
        <div>
            <p>Please insert verification code</p>
            <ReactCodeInput type='text' fields={6} />
            <Spinner/>
        </div>
    );
};

InsertCode.propTypes = {
    
};

export default InsertCode;
