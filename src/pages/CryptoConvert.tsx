import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { Card } from 'baseui/card';
import { Block } from 'baseui/block';
import { useStyletron } from 'baseui';
import { Cell, Grid } from 'baseui/layout-grid';

function CryptoConvert() {
  const { id } = useParams();
  const [, theme] = useStyletron();
  const [data, setData] = useState<any>();

  useEffect(() => {
    fetch(
      `https://api.coinbase.com/v2/exchange-rates?currency=${id.toUpperCase()}`
    )
      .then((response) => response.json())
      .then((coins) => {
        setData(coins);
      });
  }, []);

  if (!data) return null;

  return (
    <>
      <Helmet>
        <title>{id.toUpperCase()} price</title>
        <meta
          name="description"
          content={`Get the value of 1 ${id.toUpperCase()} against most common currencies.`}
        />
      </Helmet>
      <Grid>
        <Cell span={[4, 8, 12]}>
          <Block margin={theme.sizing.scale500}>
            <Card>
              <h1>
                1 {id.toUpperCase()} = {data.data.rates.USD} USD
              </h1>
            </Card>
          </Block>
          <Block margin={theme.sizing.scale500}>
            <Card>
              <h1>
                1 {id.toUpperCase()} = {data.data.rates.EUR} EUR
              </h1>
            </Card>
          </Block>
        </Cell>
      </Grid>
    </>
  );
}

export default CryptoConvert;
