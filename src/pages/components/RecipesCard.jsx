import React from 'react';
import { nanoid } from 'nanoid';

function RecipeCard({ props }) {
  return props.map((item) => {
    const { name, image, price, id } = item;

    return (
      <div key={nanoid()}>
        <img src={image} alt={name} width='100px' key={nanoid()} />
        <div>
          <h1 key={nanoid()}>{name}</h1>
          <p>Preço R${price}</p>
          <p>ID:{id}</p>
        </div>
      </div>
    );
  });
}

export default RecipeCard;
