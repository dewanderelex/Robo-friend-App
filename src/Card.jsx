import React from 'react';
import 'tachyons';

const Card = (props) => {
    const {name, email, id} = props;
    return (
        <div className = 'bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt = 'robot' src = {`https://robohash.org/${id}?50x50`}/>
            <div className = 'tc'>
                <h3>{name}</h3>
                <div>{email}</div>
            </div>
        </div>
    );
};

export default Card;