import React, { useEffect, useState } from 'react';
import proFranchisingAPI from '../api/products';
import RecipeCard from './components/RecipesCard';
import HeaderMenu from './components/HeaderMenu';
import { useNavigate } from 'react-router-dom';
import FooterMenu from './components/FooterMenu';

export default function Recipes() {
  const [itemsAPI, setItemsAPI] = useState();
  const [loaded, setLoaded] = useState(false);
  const [totalItems, setTotalItems] = useState(5);
  const [totalPages, setTotalPages] = useState(0);
  const [offSet, setOffSet] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      document.cookie.split(';')[1].slice(7);

      if (!itemsAPI) {
        proFranchisingAPI.getProducts(offSet, totalItems).then((data) => {
          const listItemsAPI = [];

          data.content.map((item) => listItemsAPI.push(item));
          setItemsAPI(listItemsAPI);
          setLoaded(true);
          setTotalPages(data.totalPages);
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
          <div>
            <strong>Defina a quantidade de itens por página </strong>
            <select onChange={(e) => setTotalItems(Number(e.target.value))}>
              <option value='5'>5 itens</option>
              <option value='15'>15 itens</option>
              <option value='30'>30 itens</option>
            </select>
            <button
              onClick={() => {
                setLoaded(false);
                proFranchisingAPI.getProducts(offSet, totalItems).then((data) => {
                  const listItemsAPI = [];

                  data.content.map((item) => listItemsAPI.push(item));
                  setItemsAPI(listItemsAPI);
                  setLoaded(true);
                  setTotalPages(data.totalPages);
                  setOffSet(0);
                });
              }}
            >
              Atualizar
            </button>
          </div>
          <RecipeCard props={itemsAPI} />
          <button
            onClick={() => {
              offSet === 0 ? setOffSet(0) : setOffSet((prev) => prev - 1);

              proFranchisingAPI.getProducts(offSet, totalItems).then((data) => {
                const listItemsAPI = [];

                data.content.map((item) => listItemsAPI.push(item));
                setItemsAPI(listItemsAPI);
                setLoaded(true);
                setTotalPages(data.totalPages);
              });
            }}
          >
            Voltar Página
          </button>
          <button
            onClick={() => {
              offSet > totalPages ? setOffSet(totalPages) : setOffSet((prev) => prev + 1);

              proFranchisingAPI.getProducts(offSet, totalItems).then((data) => {
                const listItemsAPI = [];

                data.content.map((item) => listItemsAPI.push(item));
                setItemsAPI(listItemsAPI);
                setLoaded(true);
                setTotalPages(data.totalPages);
              });
            }}
          >
            Próxima Página
          </button>
          <span>
            Página: {offSet} de {totalPages}
          </span>
        </>
      )}
      <FooterMenu />
    </>
  );
}
