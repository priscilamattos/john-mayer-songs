import "./App.scss";
import { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import firebase from "./firebase";
import SongCard from "./Components/SongCard";
import Header from "./Components/Header";
import SearchBox from "./Components/SearchBox";
import Footer from "./Components/Footer";

function App() {
  const [selectedSongTitle, setSelectedSongTitle] = useState("");
  const [songList, setSongList] = useState([]);
  const [displaySong, setDisplaySong] = useState([]);

  useEffect(() => {
    // create a variable that holds our database details
    const database = getDatabase(firebase);

    // we then create a variable that makes reference to our database
    const dbRef = ref(database);

    // add an event listener to that variable that will fire
    // from the database, and call that data 'response'.
    onValue(dbRef, (response) => {
      // here we use Firebase's .val() method to parse our database info the way we want it
      setSongList(response.val());
    });
  }, []);

  useEffect(() => {
    if (selectedSongTitle) {
      setDisplaySong(
        songList.filter(({ title }) => title === selectedSongTitle)
      );
    }
  }, [songList, selectedSongTitle]);

  return (
    <div className="App">
      <Header />
      <SearchBox
        songList={songList}
        selectedSongTitle={selectedSongTitle}
        setSelectedSongTitle={setSelectedSongTitle}
      />
      <div className="card-container">
        {displaySong.map((song) => (
          <SongCard key={song.title} song={song} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
