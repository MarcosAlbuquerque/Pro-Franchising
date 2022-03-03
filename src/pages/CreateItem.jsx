import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import proFranchisingAPI from '../api/products';
import { nanoid } from 'nanoid';
import HeaderMenu from './components/HeaderMenu';

function CreateItem() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState(0);
  const [ingredientName, setIngredientName] = useState('');
  const [ingredientCost, setingredientCost] = useState(0);
  const [ingredientQuant, setIngredientQuant] = useState(0);

  useEffect(() => {
    try {
      document.cookie.split(';')[1].slice(7);
    } catch (e) {
      navigate('../', { replace: true });
    }
  });

  return (
    <section id='recipes'>
      <HeaderMenu />
      <div id='mainContent'>
        <h1>Criar Receita</h1>
        <div>
          <input
            type='text'
            placeholder='Título ou Nome da Receita'
            id='name'
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type='text'
            id='imagem'
            placeholder='Link da Imagem'
            onChange={(e) => setImage(e.target.value)}
          />
          <input
            type='number'
            placeholder='Valor em R$'
            id='price'
            min='0'
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <h2>Ingredientes</h2>
        <div>
          <input
            type='text'
            id='ingredientName'
            placeholder='Nome do Ingrediente'
            onChange={(e) => setIngredientName(e.target.value)}
          />
          <input
            type='number'
            id='ingredientCost'
            placeholder='Quanto Custa o Ingrediente'
            onChange={(e) => setingredientCost(e.target.value)}
          />
          <input
            type='number'
            id='ingredientQuant'
            placeholder='Quantidade do Ingrediente'
            onChange={(e) => setIngredientQuant(e.target.value)}
          />
        </div>
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
              proFranchisingAPI.createProduct(name, image, price, [
                {
                  name: ingredientName,
                  cost: Number(ingredientCost),
                  quantity: Number(ingredientQuant),
                },
              ]);
            }}
          >
            Criar Receita
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

export default CreateItem;
