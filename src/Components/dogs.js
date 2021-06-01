import React from 'react';


const Dogs = (props) => {
    return (          
        <tbody>
        <tr>
            <td>{props.dog.id}</td>
            <td>{props.dog.name}</td>
            <td>{props.dog.breed}</td>
            <td>{props.dog.color}</td>
            <td>{props.dog.age}</td>
            <td>{props.dog.size}</td>
            <td>{props.dog.gender}</td>
        </tr>
    </tbody>
        
    );
}

export default Dogs;