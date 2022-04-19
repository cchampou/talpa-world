import { Cell, Grid } from 'baseui/layout-grid';
import { Card } from 'baseui/card';
import { Helmet } from 'react-helmet';
import ReactMarkdown from 'react-markdown';
import content from '../articles/videoConversion.md?raw';

function ConvertAudioVideo() {
  return (
    <>
      <Helmet>
        <title>How to convert a video or audio with ffmpeg</title>
      </Helmet>
      <Grid>
        <Cell span={[4, 8, 12]}>
          <Card>
            <ReactMarkdown>{content}</ReactMarkdown>
          </Card>
        </Cell>
      </Grid>
    </>
  );
}

export default ConvertAudioVideo;
