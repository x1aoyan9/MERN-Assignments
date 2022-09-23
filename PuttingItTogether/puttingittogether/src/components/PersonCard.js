import React from 'react';
import { useState } from 'react';

const PersonCard = (props) => {

    const {fName, lName, hColor} = props
    const [age, setAge] = useState(0)

    const handleClick = () => {
        setAge(age + 1);
    }

    return (
        <div>
            <h1>
                {lName}, {fName}
            </h1>
            <div>
                Age: {age}
                Hair Color: {hColor}
            </div>
            <div>
                <button onClick={ handleClick }>Birthday Button for {fName}</button>
            </div>
        </div>
    );
}

export default PersonCard;