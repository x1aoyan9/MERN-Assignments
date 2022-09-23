import React from 'react';

const PersonCard = (props) => {
    return (
        <div>
            <h1>
                {props.lName}, {props.fName}
            </h1>
            <p>
                Age: {props.age}
                Hair Color: {props.hColor}
            </p>
        </div>
    );
}

export default PersonCard;