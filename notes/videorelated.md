### How you encode the video has huge implications on the playback ability of video. The video encoding is super important here to enable frame-by-frame scrubbing.

```
ffmpeg -i ~/Downloads/Toshiba\ video/original.mov -movflags faststart -vcodec libx264 -crf 23 -g 1 -pix_fmt yuv420p output.mp4
ffmpeg -i ~/Downloads/Toshiba\ video/original.mov -vf scale=960:-1 -movflags faststart -vcodec libx264 -crf 20 -g 1 -pix_fmt yuv420p output_960.mp4
```

You can try exporting the video with more keyframes. 

how your video is encoded (and how video playback of encoded video works at its core). There are keyframes in compressed video, typically every X frames
(you decide when you encode) and then it only saves the CHANGES on subsequent frames, until it reaches the next keyframe. So when you play forward, it 
is flawless and smooth. When you go backwards, it's much more difficult on the computer because it either just burps and renders the previous keyframe 
(which may be 15, 30, 60, or even 90 frames earlier) or it must find the previous keyframe and iterate through all the changed frames after that until 
it reaches the desired time. 

 
So you could encode your video with keyframes MUCH more frequent (literally making every frame a keyframe would deliver amazing quality and smoothness), 
but the file size will probably go up drastically (because it's forced to save a lot more data). 
