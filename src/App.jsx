import { useEffect, useState } from "react";
import "./App.css";
import Video from "./components/Video";
import { db } from "../firebase";
import { collection, onSnapshot, query } from "firebase/firestore";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "videos"));

    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let arrVideos = [];
      QuerySnapshot.forEach((doc) => {
        arrVideos = [...arrVideos, { ...doc.data(), id: doc.id }];
      });
      setVideos(arrVideos);
    });

    return () => unsubscribe();
  }, []);

  console.log(videos);
  return (
    <div className="app">
      <main className="app_videos ">
        {videos.map(({ channel, song, desc, url, likes, shares, messages }) => (
          <Video
            key={url}
            channel={channel}
            song={song}
            desc={desc}
            url={url}
            likes={likes}
            shares={shares}
            messages={messages}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
