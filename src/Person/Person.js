import React from 'react';

const person = (props) => {
    return (
        <div>
            {/* <img src={props.picture.thumbnail} className="img-circle" ></img> */}
            <p>{props.individual.name.first} {props.individual.name.last} {props.individual.email} </p>
            <p>{props.individual.children}</p>
        </div>
    )
};

export default person;