import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

function CryptoConvert() {
  const { id } = useParams();
  const [data, setData] = useState<any>();

  useEffect(() => {
    fetch(
      `https://api.coinbase.com/v2/exchange-rates?currency=${id.toUpperCase()}`
    )
      .then((response) => response.json())
      .then((coins) => {
        setData(coins);
        console.log(coins);
      });
  }, []);

  if (!data) return null;

  return (
    <>
      <Helmet>
        <title>{id.toUpperCase()} price</title>
      </Helmet>
      <h1>
        1 {id.toUpperCase()} = {data.data.rates.USD} USD
      </h1>
    </>
  );
}

export default CryptoConvert;
