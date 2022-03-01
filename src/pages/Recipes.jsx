import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import proFranchisingAPI from '../api/products';

export default function Recipes() {
  const [itemsAPI, setItemsAPI] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!itemsAPI) {
      proFranchisingAPI.getProducts().then((res) => {
        res.content.map((item) => setItemsAPI([{ ...item }]));
        console.log(res.content);
        console.log(res);
        setLoaded(true);
      });
    }
  });

  if (!loaded) {
    return <h1>Carregando</h1>;
  } else {
    return (
      <>
        <h1 key={nanoid()}>Recipes</h1>
        <p id='invalidMessage' key={nanoid()}></p>
        {itemsAPI.map((item) => {
          return (
            <div key={nanoid()}>
              <img src={item.image} alt={item.name} key={nanoid()} />
              <h1 key={nanoid()}>{item.name}</h1>
            </div>
          );
        })}
      </>
    );
  }
}

// import { useNavigate } from 'react-router-dom';
// setItemsAPI();
// if (auth) {
// document.cookie.slice(6) === token
// } else {
// navigate('../', { replace: true });
// }
