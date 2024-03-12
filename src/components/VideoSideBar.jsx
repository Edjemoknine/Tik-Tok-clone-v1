import { Heart, MessageSquareText, SendHorizontal } from "lucide-react";
import { useState } from "react";

const VideoSideBar = ({ likes, messages, shares }) => {
  const [liked, setliked] = useState(false);
  return (
    <div className="absolute right-0 top-1/2  text-white">
      <div className="p-4 text-center">
        <Heart
          fill={liked ? "red" : "transparent"}
          onClick={() => setliked(!liked)}
          className="cursor-pointer"
        />
        <p className="text-xs">{liked ? likes + 1 : likes}</p>
      </div>
      <div className="p-4 text-center">
        <MessageSquareText className="cursor-pointer" />
        <p className="text-xs">{messages}</p>
      </div>
      <div className="p-4 text-center">
        <SendHorizontal className="cursor-pointer" />
        <p className="text-xs">{shares}</p>
      </div>
    </div>
  );
};

export default VideoSideBar;
