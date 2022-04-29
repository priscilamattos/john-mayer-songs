const SongCard = ({ song }) => {
  console.log(song);
  const onLyricClick = () => {
    window.open(song.lyrics, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="song-card">
      <h3>{song.title}</h3>
      <p>{song.album}</p>
      <iframe
        width="560"
        height="315"
        src={song.video}
        title={song.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="btn-container">
        <button onClick={onLyricClick}>Lyrics</button>
      </div>
    </div>
  );
};

export default SongCard;
