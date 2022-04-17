import React from 'react';
import { NavLink } from 'react-router-dom';

function Homepage() {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/crypto/eth">Ethereum</NavLink>
      <NavLink to="/crypto/btc">Bitcoin</NavLink>
      <NavLink to="/crypto/sol">Solana</NavLink>
    </>
  );
}

export default Homepage;
