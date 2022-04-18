import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppNavBar } from 'baseui/app-nav-bar';
import { Block } from 'baseui/block';
import { useStyletron } from 'baseui';

function Navigation() {
  const { pathname } = useLocation();
  const [, theme] = useStyletron();
  const [mainItems, setMainItems] = useState([
    {
      label: 'Home',
      to: '/',
    },
    {
      label: 'Video',
      to: '/video',
    },
    {
      label: 'Crypto',
      to: '/crypto',
    },
  ]);
  const navigate = useNavigate();

  const onMainItemClick = (item) => {
    navigate(item.to);
  };

  useEffect(() => {
    setMainItems((prev) =>
      prev.map((item) =>
        pathname === item.to
          ? { ...item, active: true }
          : { ...item, active: false }
      )
    );
  }, [pathname]);

  return (
    <Block marginBottom={theme.sizing.scale500}>
      <AppNavBar
        title="Talpa World"
        mainItems={mainItems}
        onMainItemSelect={onMainItemClick}
      />
    </Block>
  );
}

export default Navigation;
