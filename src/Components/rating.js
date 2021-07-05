import React, { useState } from 'react';
import {FaDog} from 'react-icons/fa';
import './rating.css';



const StarRating = () => {
    const [rating, setRating] = useState(null);
    const[hover, setHover] = useState(null);



    return (
     <div>
         {[...Array(5)].map((dog, i) => {
             const ratingValue = i + 1;


             return <label> 
                 <input type="radio" 
                 name="rating" 
                 value={ratingValue} 
                 onClick={() => setRating(ratingValue)}
                 
                 />
                 <FaDog className="dog" 
                 color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'} 
                 size={30}
                 onMouseEnter={() => setHover(ratingValue)}
                 onMouseLeave={() => setHover(null)}     
                 /> 
                 </label>       
        })}
    </div>
    );
}

export default StarRating;