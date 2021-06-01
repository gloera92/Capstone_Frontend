import React from 'react'

const DogTable = (props) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Id</th>                  
                    <th>Name</th>
                    <th>Breed</th>
                    <th>Color</th>
                    <th>Age</th>
                    <th>Size</th>
                    <th>Gender</th>
                </tr>      
            </thead>           
           {props.mapDogs()}
        </table>
    )
}

export default DogTable;