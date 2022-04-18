import { Cell, Grid } from 'baseui/layout-grid';
import { Card } from 'baseui/card';
import { Helmet } from 'react-helmet';

function ConvertAudioVideo() {
  return (
    <>
      <Helmet>
        <title>How to convert a video or audio with ffmpeg</title>
      </Helmet>
      <Grid>
        <Cell span={[4, 8, 12]}>
          <Card>
            <h1>How to convert a video or audio with ffmpeg</h1>
            If you just want to change the format of a video, you can use the
            ffmpeg command line tool.
            <Card>ffmpeg -i input.mkv output.mp4</Card>
            It works for both audio and video files.
            <Card>ffmpeg -i input.wav output.mp3</Card>
            <strong>
              Note: as we did not specify the codecs, ffmpeg is guessing them.
            </strong>
          </Card>
        </Cell>
      </Grid>
    </>
  );
}

export default ConvertAudioVideo;
