import React from 'react';
import Card from './Card';

const CardList = (props) => {
    
    const {robots} = props;

    const CardRoute = robots.map((user, key) => {
        return (
            <Card key = {key} id = {robots[key].id} name = {robots[key].name} email = {robots[key].email}/>
        );
    });

    return (
        <div className = "pa4">
            {CardRoute}
        </div>
    );
};

export default CardList; 
