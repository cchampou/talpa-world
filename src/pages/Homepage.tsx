import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function Homepage() {
  return (
    <>
      <Helmet>
        <title>Homepage</title>
      </Helmet>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/crypto/eth">Ethereum</NavLink>
      <NavLink to="/crypto/btc">Bitcoin</NavLink>
      <NavLink to="/crypto/sol">Solana</NavLink>
    </>
  );
}

export default Homepage;
