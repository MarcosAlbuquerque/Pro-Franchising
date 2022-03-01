import React from 'react';
import { nanoid } from 'nanoid';

function RecipeCard({ props }) {
  const { name, image, price } = props;

  return (
    <div key={nanoid()}>
      <img src={image} alt={name} width='100px' key={nanoid()} />
      <div>
        <h1 key={nanoid()}>{name}</h1>
        <span>Preço R${price}</span>
      </div>
    </div>
  );
}

export default RecipeCard;
