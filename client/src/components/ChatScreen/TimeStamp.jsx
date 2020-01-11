import React from 'react';
import PropTypes from 'prop-types';

const TimeStamp = props => {

    const hour = new Date().getHours().toString()
    const minute = new Date().getMinutes().toString()
    const seconds = new Date().getSeconds().toString()
    const timeStamp = hour + ':' + minute + ':' + seconds + ' hs'

    return (
        <div>
            {timeStamp}
        </div>
    );
};

TimeStamp.propTypes = {
    
};

export default TimeStamp;