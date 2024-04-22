import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ videoUrl }: { videoUrl: string }) => {
  const [isReady, setIsReady] = useState<Boolean>(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  return (
    <div className="flex justify-center">
      {isReady && <ReactPlayer url={videoUrl} controls={true} />}

      {!isReady && <p>Loading...</p>}
    </div>
  );
};

export default VideoPlayer;
