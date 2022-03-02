import React, { useEffect, useState } from 'react';
import proFranchisingAPI from '../api/products';
import RecipeCard from './components/RecipesCard';
import HeaderMenu from './components/HeaderMenu';
import { useNavigate } from 'react-router-dom';
import FooterMenu from './components/FooterMenu';

export default function Recipes() {
  const [itemsAPI, setItemsAPI] = useState();
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      document.cookie.split(';')[1].slice(7);

      if (!itemsAPI) {
        proFranchisingAPI.getProducts().then((res) => {
          const listItemsAPI = [];
          res.content.map((item) => listItemsAPI.push(item));
          setItemsAPI(listItemsAPI);
          setLoaded(true);
        });
      }
    } catch (error) {
      navigate('../', { replace: true });
    }
  });

  return (
    <>
      <HeaderMenu />
      {!loaded ? (
        <h1 id='loading'>Carregando...</h1>
      ) : (
        <>
          <h1>Produtos</h1>
          <RecipeCard props={itemsAPI} />
        </>
      )}
      <FooterMenu />
    </>
  );
}
