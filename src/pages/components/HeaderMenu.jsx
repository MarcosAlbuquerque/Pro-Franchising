import { useNavigate } from 'react-router-dom';
import React from 'react';

function HeaderMenu() {
  const navigate = useNavigate();
  return (
    <>
      <strong>{document.cookie.split(';')[0].slice(5)}</strong>
      <button
        onClick={() => {
          document.cookie = 'token=;expires=Thu, 01 Jan 1970 00:00:00 UTC;';
          navigate('../');
        }}
      >
        Sair
      </button>
    </>
  );
}

export default HeaderMenu;
