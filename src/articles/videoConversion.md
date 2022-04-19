# How to convert a video or audio with ffmpeg

Sometimes you want to convert a video or audio file to another format.
If you are familiar with command line tools it can be as simple as ONE
command line.
Without knowing much about audio and video codecs, `ffmpeg` is really good
at guessing, so you are lucky.

## The simple way

Specify the input file with `-i` option, then the output file with the desired
file extension, and you're done.

```shell
ffmpeg -i input.mkv output.mp4
```

It works for both audio and video files.

```
ffmpeg -i input.wav output.mp3
```

**Note: as we did not specify the codecs, ffmpeg is guessing them.**
