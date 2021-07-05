import React, { useState } from "react";
import { Table, Input, message } from "antd";
import axios from "axios";
import { DogList } from "../Components/DogList/dogList";
import { useTableSearch } from "./tableSearch";
// import Message from './messaging';
import StarRating from './rating';


const qs = require('qs')
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


async function Message(){
    const accountSid = 'ACbd4a558c3ef90bca8af34796fe8373ec';
    const authToken = 'dbbd93ccb29646dd5d4d333999fc266a';
    await(axios.post("https://api.twilio.com/2010-04-01/Accounts/" + accountSid + "/Messages.json", qs.stringify({
  Body: 'Would you like to breed dogs?',
  From: "+13158732466",
  To: "+17607139446"
}), {
  auth: {
    username: accountSid,
    password: authToken
  }
}));
}




//     Body: "Would you like to breed?",
//     From: '+13158732466',
//     To: '+17607139446'
//     }), {
//     auth: {
//     username: accountSid,
//     password: authToken
//   }
// }));

// }


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
      <button onClick={Message}>Message owner!</button>
      {/* <StarRating/> */}
      <Table
        rowKey="name"
        dataSource={filteredData}
        columns={DogList} 
        loading={loading}
        pagination={false}
        style={{
            backgroundColor: "grey",
            color: "black"
        }}
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