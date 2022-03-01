import { useNavigate } from 'react-router-dom';
import React from 'react';

function HeaderMenu() {
  const navigate = useNavigate();
  // const { name, image, price } = props;
  // console.log(props);
  return (
    <button
      onClick={() => {
        document.cookie = 'token=;expires=Thu, 01 Jan 1970 00:00:00 UTC;';
        navigate('../');
      }}
    >
      Sair
    </button>
  );
}

export default HeaderMenu;
