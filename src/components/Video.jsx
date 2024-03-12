import { useState } from "react";
import { useRef } from "react";
import VideoFooter from "./VideoFooter";
import VideoSideBar from "./VideoSideBar";

const Video = ({ url, channel, desc, messages, shares, likes, song }) => {
  const [isPlay, setIsPlay] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (isPlay) {
      videoRef.current.pause();
      setIsPlay(false);
    } else {
      videoRef.current.play();
      setIsPlay(true);
    }
  };
  return (
    <div className="w-full mb-6 h-full bg-white relative snap-start rounded-3xl">
      <video
        ref={videoRef}
        onClick={onVideoPress}
        className="player"
        src={url}
        loop
      />
      <VideoFooter channel={channel} song={song} desc={desc} />
      <VideoSideBar likes={likes} shares={shares} messages={messages} />
    </div>
  );
};

export default Video;
