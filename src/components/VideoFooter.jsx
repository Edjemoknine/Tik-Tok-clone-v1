/* eslint-disable react/prop-types */
import disc from "../assets/cd.png";
import { Music2 } from "lucide-react";
import Ticker from "react-ticker";

const VideoFooter = ({ channel, desc, song }) => {
  return (
    <div className="relative bottom-24 text-white flex px-6">
      <div className="footer_text flex-1 flex flex-col ">
        <h3 className="font-bold text-lg">{channel}</h3>
        <p className="text-sm">{desc}</p>
        <div className="relative mt-4">
          <Music2 className="absolute" size={20} />
          <Ticker>
            {({ index }) => (
              <>
                <p className="text-xs">{song} </p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img
        className="w-7 h-7 animate-spin absolute bottom-0 right-4"
        src={disc}
        alt="icon"
      />
    </div>
  );
};

export default VideoFooter;
