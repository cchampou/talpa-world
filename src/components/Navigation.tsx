import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppNavBar } from 'baseui/app-nav-bar';

function Navigation() {
  const { pathname } = useLocation();
  const [mainItems, setMainItems] = useState([
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
        pathname.includes(item.to)
          ? { ...item, active: true }
          : { ...item, active: false }
      )
    );
  }, [pathname]);

  return (
    <AppNavBar
      title="Talpa World"
      mainItems={mainItems}
      onMainItemSelect={onMainItemClick}
    />
  );
}

export default Navigation;
