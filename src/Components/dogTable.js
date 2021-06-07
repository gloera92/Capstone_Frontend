import React, { useState } from "react";
import { Table, Input } from "antd";
import axios from "axios";
import { DogList } from "./dogList";
import { useTableSearch } from "./tableSearch";


const { Search } = Input;

const fetchUsers = async () => {
    const token = localStorage.getItem('token');
    const { data } = await axios.get('http://127.0.0.1:8000/k9list/', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
  return { data };
};


export default function DogTable() {
  const [searchVal, setSearchVal] = useState(null);

  const { filteredData, loading } = useTableSearch({
    searchVal,
    retrieve: fetchUsers
  });

  return (
    <>
      <Search
        onChange={(e) => setSearchVal(e.target.value)}
        placeholder="Search"
        enterButton
        style={{
          position: "sticky",
          top: "0",
          left: "0",
          width: "200px",
          marginTop: "2vh"
        }}
      />
      <br /> <br />
      <Table
        rowKey="name"
        dataSource={filteredData}
        columns={DogList}
        loading={loading}
        pagination={false}
      />
    </>
  );
}

















// import React, { Component } from 'react'
// // import './dogList.css';

// class DogTable extends Component {
//     constructor(props) {
//         super(props);
        

//         this.state = {
//             dogs: `${this.props.dogs.data}`,
//             input: ''
            
//         };
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//         console.log(this.props.dogs, "propdogs")
//         this.props.getAllDogs()
//     }

//     handleChange(event) {
//         this.setState({input: event.target.value});
//     }

//     handleSubmit(event) {
//         event.preventDefault();
        
//         this.searchQuery(this.state.input);
//         this.setState({
//             input: ''
//         })
//     }
    
    


//     render() {
        
//         return (
//             <div className="dogTable">

        
//                 <form onSubmit={this.handleSubmit}>
//                 <input type="text"  value={this.state.input} onChange={this.handleChange} />
//                 <input type="submit" value="Submit" />
//                 <table className="table table-dark table-striped">
//                                     <thead>      
//                                     <tr>
//                                         <th>Id</th>
//                                         <th>Name</th>
//                                         <th>Breed</th>
//                                         <th>Color</th>
//                                         <th>Age</th>
//                                         <th>Size</th>
//                                         <th>Gender</th>
//                                         <th>Zipcode</th>
                                        
                                        
//                                     </tr>
//                                     </thead>
//                                     {this.props.dogs.map((dog, index )=> (
//                                         <tbody>
//                                         <tr>
//                                         <td>{dog.id}</td>
//                                         <td>{dog.name}</td>
//                                         <td>{dog.breed}</td>
//                                         <td>{dog.color}</td>
//                                         <td>{dog.age}</td>
//                                         <td>{dog.size}</td>
//                                         <td>{dog.gender}</td>
//                                         <td>{dog.zipcode}</td>
                                        
//                                         </tr>
//                                     </tbody>
//                                     ))}
                                    
                                  
//                     </table>        
//                                     </form>
//                 </div>               
            
//         )
//     }
// }

// export default DogTable;








// {/* <div className="dogTable">

// <table className="table table-dark table-striped">
//     <thead>
//         <tr>
//             <th>Id</th>  
//             <th>Name</th>                            
//             <th>Breed</th>
//             <th>Color</th>
//             <th>Age</th>
//             <th>Size</th>
//             <th>Gender</th>
//             <th>User</th>
//             <th>Zipcode</th>
//         </tr>      
//     </thead>           
//         {props.mapDogs()}
// </table>
// </div> */}