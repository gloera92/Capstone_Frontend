import React, {Component} from 'react';
import './profile.css';
import axios from 'axios';
import Rating from './rating';


class Profile extends Component {
    constructor(props) {
        super(props);
        

        this.state = {
            user: ``,
            file: null
            
        };
        this.handleChange = this.handleChange.bind(this)
        console.log(this.props.user, "propsuser")
        this.props.filterDogs()
    }

    async deleteDog(id){
        await axios.delete('http://127.0.0.1:8000/k9detail/'+id+'/');
        this.props.getAllDogs();  
    }

    handleChange(event) {
        this.setState({
          file: URL.createObjectURL(event.target.files[0])
        })
      }

      
    
    


    
    render() {
        return (
            <div className="profile">

                <h1>Profile</h1>
                <h3>Welcome {this.props.getCurrentBreeder()}</h3>
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
                                        <th>Cost</th>
                                        <th>Dog Photo
                                       
                                        </th>
                                        <th>Delete Dog</th>

                                        
                                        
                                    </tr>
                                    </thead>
                                    {this.props.filteredDogs.map((dog, index )=> (
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
                                        <td>{dog.cost}</td>
                                            <td> <input type="file"  onChange={this.handleChange}/> <img src={this.state.file}/></td>
                                            
                                        <td><button  onClick={() => this.deleteDog(dog.id)} >Delete</button></td>
                                        </tr>
                                    </tbody>
                                    ))}
                    </table>        
                </div>               
            
        )
    }
}

export default Profile;
    
    



    

