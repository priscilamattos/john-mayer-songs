const SearchBox = ({ songList, selectedSongTitle, setSelectedSongTitle }) => {
  return (
    <>
      <section className="search-container">
        <div className="searchBox wrapper">
          <h2>Please select a song below:</h2>
          <form className="searchForm" action="submit">
            <select
              value={selectedSongTitle}
              onChange={(e) => {
                setSelectedSongTitle(e.target.value);
              }}
            >
              <option value="" disabled>
                Please select a song
              </option>

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
