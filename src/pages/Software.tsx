import React from 'react';
import { Cell, Grid } from 'baseui/layout-grid';
import { Card } from 'baseui/card';
import { Helmet } from 'react-helmet';
import UnixConvert from '../components/UnixConvert';

function Software() {
  return (
    <>
      <Helmet>
        <title>Software development</title>
        <meta
          name="description"
          content="Everything about software development I like or recommend, tips & tricks, news and more!"
        />
      </Helmet>
      <Grid>
        <Cell span={[4, 4, 6]}>
          <Card>
            <h1>Top libraries I use</h1>
            <a href="https://vitejs.dev/" target="_blank" rel="noreferrer">
              ViteJS
            </a>
            <br />
            <a href="https://baseweb.design/" target="_blank" rel="noreferrer">
              Base Web UI Library
            </a>
            <br />
            <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
              TailwindCSS
            </a>
          </Card>
        </Cell>
        <Cell span={[4, 4, 6]}>
          <Card>
            <h1>Unix timestamp to readable date</h1>
            <UnixConvert />
          </Card>
        </Cell>
      </Grid>
    </>
  );
}

export default Software;
