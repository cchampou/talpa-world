import { Helmet } from 'react-helmet';
import { Card } from 'baseui/card';
import { NavLink } from 'react-router-dom';
import { Cell, Grid } from 'baseui/layout-grid';

function Homepage() {
  return (
    <>
      <Helmet>
        <title>Homepage</title>
      </Helmet>
      <Grid>
        <Cell span={12}>
          <Card>
            <h1>Stay productive</h1>
            <NavLink to="/productivity">
              Use my tools to stay productive
            </NavLink>
            <h1>Work smart not hard</h1>
            <NavLink to="/software">
              Here are my software tips, tricks and tools
            </NavLink>
            <h1>Video maker?</h1>
            <NavLink to="/video">
              Check out how to convert a video or audio quickly and easily
            </NavLink>
            <h1>You&apos;re into crypto?</h1>
            <NavLink to="/crypto">Check the most common crypto prices</NavLink>
          </Card>
        </Cell>
      </Grid>
    </>
  );
}

export default Homepage;
