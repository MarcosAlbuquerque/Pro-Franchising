import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import proFranchisingAPI from '../api/products';
import RecipeCard from './components/RecipesCard';
import HeaderMenu from './components/HeaderMenu';
import { useNavigate } from 'react-router-dom';

export default function Recipes() {
  const [itemsAPI, setItemsAPI] = useState();
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (document.cookie.length === 0) {
      navigate('../', { replace: true });
    } else if (!itemsAPI) {
      proFranchisingAPI.getProducts().then((res) => {
        res.content.map((item) => setItemsAPI([{ ...item }]));
        setLoaded(true);
        // console.log(res.content);
        // console.log(res);
      });
    }
  });

  return (
    <>
      <HeaderMenu />
      {!loaded ? (
        <h1 id='loading'>Carregando...</h1>
      ) : (
        <>
          <h1 key={nanoid()}>Produtos</h1>
          {itemsAPI.map((item) => (
            <RecipeCard key={nanoid()} props={item} />
          ))}
        </>
      )}
    </>
  );
}

// import { useNavigate } from 'react-router-dom';
// setItemsAPI();
// if (auth) {
// document.cookie.slice(6) === token
// } else {
// navigate('../', { replace: true });
// }
