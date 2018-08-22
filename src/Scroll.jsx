import React from 'react';
import { height } from 'window-size';

const Scroll = (props) => {
    return (
        <div style = {{overflowY : 'scroll', height : '800px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;