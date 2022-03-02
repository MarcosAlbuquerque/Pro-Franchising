import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import proFranchisingAPI from '../api/products';

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
    <>
      <h1>Criar Receita</h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '10px 0',
          gap: '6px',
        }}
      >
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
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '10px 0',
          gap: '6px',
        }}
      >
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
      <div style={{ display: 'flex', gap: '5px' }}>
        <img src={image} alt={name} style={{ width: '100px' }} />
        <h2 style={{ padding: 0, margin: 0 }}>{name}</h2>
      </div>
      <p>
        <strong id='statusCadastro'></strong>
      </p>
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
      <p>
        Bolinho Oswaldo Aranha da Kátia Barbosa
        https://s2.glbimg.com/_0udmylbOM67tpCa6ms-fFwYaUg=/0x0:763x863/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2022/v/s/pT16OfTyKencNOKXDksw/katia-20.jpeg
        Sal a gosto
      </p>
    </>
  );
}

export default CreateItem;

// [
//   {
//     cost: 0,
//     name: 'string',
//     quantity: 0,
//   },
// ];
