const SearchBox = ({ songList, selectedSong, setSelectedSong }) => {
  return (
    <>
      <section className="search-container">
        <div className="searchBox wrapper">
          <h2>WELCOME TEXT AND INSTRUCTIONS HERE</h2>
          <form className="searchForm" action="submit">
            <select
              value={selectedSong}
              onChange={(e) => {
                setSelectedSong(e.target.value);
              }}
            >
              <option value="">Please select a song</option>

              {songList.map((song) => (
                <option key={song.title} value={song.title}>
                  {song.title}
                </option>
              ))}
            </select>
          </form>
        </div>
      </section>
    </>
  );
};

export default SearchBox;