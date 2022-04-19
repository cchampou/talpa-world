import { Cell, Grid } from 'baseui/layout-grid';
import React from 'react';
import { Card } from 'baseui/card';
import { Helmet } from 'react-helmet';
import Pomodoro from '../components/pomodoro/Pomodoro';

function Productivity() {
  return (
    <>
      <Helmet>
        <title>Productivity</title>
        <meta
          name="description"
          content="Use my tools like a pomodoro timer and more to get things done!"
        />
      </Helmet>
      <Grid>
        <Cell span={4}>
          <Card>
            <Pomodoro />
          </Card>
        </Cell>
      </Grid>
    </>
  );
}

export default Productivity;
