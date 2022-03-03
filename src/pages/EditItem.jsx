import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';

import proFranchisingAPI from '../api/products';
import HeaderMenu from './components/HeaderMenu';

function EditItem() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState(0);
  const [ingredientName, setIngredientName] = useState('');
  const [ingredientCost, setingredientCost] = useState(0);
  const [ingredientQuant, setIngredientQuant] = useState(0);

  useEffect(() => {
    try {
      document.cookie.split(';')[1].slice(7);

      setName(state.name);
      setImage(state.image);
      setPrice(state.price);
      setIngredientName(state.ingredients[0].name);
      setingredientCost(state.ingredients[0].cost);
      setIngredientQuant(state.ingredients[0].quantity);
    } catch (e) {
      navigate('../', { replace: true });
    }
  });

  return (
    <section id='recipes'>
      <HeaderMenu />
      <div id='mainContent'>
        <h1>Editar Receita</h1>
        <div>
          <input
            type='text'
            placeholder='Título ou Nome da Receita'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type='text'
            id='imagem'
            placeholder='Link da Imagem'
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <input
            type='number'
            placeholder='Valor em R$'
            id='price'
            value={price}
            min='0'
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <h2>Ingredientes</h2>
        {state &&
          state.ingredients.map((item, index) => {
            return (
              <div key={nanoid()}>
                <p key={nanoid()}>Ingrediente {index + 1}</p>
                <input
                  type='text'
                  id='ingredientName'
                  placeholder='Nome do Ingrediente'
                  value={item.name}
                  key={nanoid()}
                  onChange={(e) => setIngredientName(e.target.value)}
                />
                <input
                  type='number'
                  id='ingredientCost'
                  placeholder='Quanto Custa o Ingrediente'
                  value={item.cost}
                  key={nanoid()}
                  onChange={(e) => setingredientCost(e.target.value)}
                />
                <input
                  type='number'
                  id='ingredientQuant'
                  placeholder='Quantidade do Ingrediente'
                  value={item.quantity}
                  key={nanoid()}
                  onChange={(e) => setIngredientQuant(e.target.value)}
                />
              </div>
            );
          })}
        <h2>Preview</h2>
        <div id='previewRecipe'>
          <img src={image} alt={name} key={nanoid()} />
          <div>
            <h1 key={nanoid()}>{name}</h1>
            <p>Preço R${price}</p>
          </div>
          <p>
            <strong id='statusCadastro'></strong>
          </p>
        </div>
      </div>
      <footer>
        <div>
          <button
            onClick={() => {
              proFranchisingAPI.updateProduct(state.id, name, image, price, [
                {
                  name: ingredientName,
                  cost: Number(ingredientCost),
                  quantity: Number(ingredientQuant),
                },
              ]);
            }}
          >
            Editar Receita
          </button>
          <button
            onClick={() => {
              navigate('../receitas');
            }}
          >
            Voltar
          </button>
        </div>
      </footer>
    </section>
  );
}

export default EditItem;
