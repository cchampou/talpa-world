import { useStyletron } from 'baseui';
import { ALIGNMENT, Cell, Grid } from 'baseui/layout-grid';
import { Card } from 'baseui/card';
import { NavLink } from 'react-router-dom';
import { Block } from 'baseui/block';

function Crypto() {
  const [, theme] = useStyletron();

  return (
    <Block margin={theme.sizing.scale500}>
      <Grid align={ALIGNMENT.center}>
        <Cell span={[4, 4, 6]}>
          <Card>
            <h1>Get prices of the most common coins</h1>
            <NavLink to="/crypto/btc">Bitcoin</NavLink>
            <br />
            <NavLink to="/crypto/eth">Ethereum</NavLink>
            <br />
            <NavLink to="/crypto/sol">Solana</NavLink>
          </Card>
        </Cell>
      </Grid>
    </Block>
  );
}

export default Crypto;
