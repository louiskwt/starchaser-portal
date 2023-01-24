interface VideoPlayerProps {
  vidUrl: string;
}

const VideoPlayer = ({ vidUrl }: VideoPlayerProps) => {
  return (
    <iframe
      width="100%"
      height="420"
      src={`https://www.youtube.com/embed/${vidUrl}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
};

export default VideoPlayer;
