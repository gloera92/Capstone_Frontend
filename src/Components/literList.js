import React, {Component} from 'react';
import {  NavLink} from 'react-router-dom';




class LiterList extends Component {
    constructor(props) {
        super(props);
        

        this.state = {
            puppies: ``,
            
            
        };
        // props.getPuppies()
        console.log(this.puppies, "this state puppies")
    }

    


    // filterDogs(){
    //     let puppies = this.state.puppies;
    //     let i = 0;
    //     let filteredDogs = this.state.dogs.filter((dog) =>{
    //         if (this.state.dogs[i].user === this.state.user){
    //             i++
    //             return true;
    //         }
    //         else{
    //             i++
    //             return false;
    //         }
    //     })
    //     this.setState({
    //         filteredDogs : filteredDogs
    //     })
    //     console.log('filteredDogs',this.state.filteredDogs)
    //     }
    

   
    render() {
        return (
            <div className="literList">

                <h1>Liter</h1>
                <button onClick={() => this.props.getPuppies()} >View Puppies</button>
                <table className="table table-dark table-striped">
                                    <thead>
                                        
                                    <tr>
                                        <th>Id</th>
                                        <th>Breed</th>                                                                             
                                        <th>Gender</th>
                                        <th>Zipcode</th>
                                        <th>Cost</th> 
                                        <th>Purchase Dogs</th>                                       
                                    </tr>
                                    </thead>
                                    
                                    {this.props.puppies.map((puppy, index )=> (
                                        <tbody>
                                        <tr>
                                        <td>{puppy.id}</td>                                        
                                        <td>{puppy.breed}</td>                                       
                                        <td>{puppy.gender}</td>
                                        <td>{puppy.zipcode}</td>
                                        <td>{puppy.cost}</td>      
                                        <td>
                                            <React.Fragment>
                                        <div className="nav-item"> <button><NavLink to='/checkout'>Purchase</NavLink></button></div>                       
                                        </React.Fragment>                                                                                   
                                            </td>
                                        </tr>
                                    </tbody>
                                    ))}
                    </table>  
                                                        
                </div>               
            
        )
    }
}

export default LiterList;