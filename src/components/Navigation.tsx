import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStyletron } from 'baseui';
import { AppNavBar } from 'baseui/app-nav-bar';

function Navigation() {
  const [css, theme] = useStyletron();
  const [mainItems, setMainItems] = useState([
    {
      label: 'Ethereum',
      to: '/crypto/eth',
    },
    {
      label: 'Bitcoin',
      to: '/crypto/btc',
    },
    {
      label: 'Solana',
      to: '/crypto/sol',
    },
  ]);
  const navigate = useNavigate();

  const onMainItemClick = (item) => {
    navigate(item.to);
    setMainItems((prev) =>
      prev.map((element) =>
        element.to === item.to
          ? { ...element, active: true }
          : { ...element, active: false }
      )
    );
  };

  return (
    <AppNavBar
      title="Talpa World"
      mainItems={mainItems}
      onMainItemSelect={onMainItemClick}
    />
  );
}

export default Navigation;
