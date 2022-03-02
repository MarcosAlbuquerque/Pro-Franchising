import React from 'react';
import { useNavigate } from 'react-router-dom';

function FooterMenu() {
  const navigate = useNavigate();
  return (
    <footer>
      <button
        onClick={() => {
          navigate('/novareceita');
        }}
      >
        Criar Receita
      </button>
    </footer>
  );
}

export default FooterMenu;
