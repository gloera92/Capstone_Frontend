import React from 'react'
// import './dogList.css';

const DogTable = (props) => {
    return (
        <div className="dogTable">
            <h1>Dogs</h1>    
            <button onClick={this.props.filterDogs()} >View Dogs</button>
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
                        <th>Zipcode</th>
                        <th>Delete Dog</th>
                        
                    </tr>
                    </thead>
                    {/* {this.props.filteredDogs.map((dog, index )=> ( */}
                        <tbody>
                        <tr>
                        <td>{dog.id}</td>
                        <td>{dog.name}</td>
                        <td>{dog.breed}</td>
                        <td>{dog.color}</td>
                        <td>{dog.age}</td>
                        <td>{dog.size}</td>
                        <td>{dog.gender}</td>
                        <td>{dog.zipcode}</td>
                        
                        </tr>
                    </tbody>
                    {/* ))} */}
    </table>        
</div>
               
        
    )
}

export default DogTable;








{/* <div className="dogTable">

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
</div> */}