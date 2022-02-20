import React from 'react';
import { useNavigate } from "react-router-dom";
import './Card.css';


const Card = ({ name, image, id, description, price }) => {
  const url = `/food/${id}`;
  let navigate = useNavigate()
  const handleButton = () => {
    navigate(url);
  }


  return (


    <div className='card-container'
      onClick={handleButton}
    >
      <img className='imageWidth' alt='drinks' src={image} />
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <h3>{price}</h3>

      </div>
    </div>


  );
}

export default Card;
