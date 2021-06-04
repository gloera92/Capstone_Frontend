import React from 'react'

const DogTable = (props) => {
    return (
        <table className="table table-dark table-striped">
            <thead>
                <tr>
                    
                    <th>Id</th>           
                    <th>Name</th>
                    <th>Breed</th>
                    <th>Color</th>
                    <th>Age</th>
                    <th>Size</th>
                    <th>Gender</th>
                    <th>User</th>
                    <th>Zipcode</th>
                </tr>      
            </thead>           
           {props.mapDogs()}
        </table>
    )
}

export default DogTable;