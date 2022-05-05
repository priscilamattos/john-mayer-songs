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
              <option value="" hidden>
                Please select a song
              </option>

              {songList.map(({ title }) => (
                <option key={title} value={title}>
                  {title}
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
