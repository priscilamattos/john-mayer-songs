import { getDatabase, onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import SearchBox from "./Components/SearchBox";
import SongCard from "./Components/SongCard";
import firebase from "./firebase";

import "./App.scss";

function App() {
  const [selectedSongTitle, setSelectedSongTitle] = useState("");
  const [songList, setSongList] = useState([]);
  const [displaySong, setDisplaySong] = useState([]);

  useEffect(() => {
    // create a variable that holds our database details
    const database = getDatabase(firebase);

    // we then create a variable that makes reference to our database
    const dbRef = ref(database, "/");

    // add an event listener to that variable that will fire
    // from the database, and call that data 'response'.
    console.log(11111);
    console.log(firebase);
    console.log(dbRef);
    onValue(dbRef, (response) => {
      console.log(response);
      // here we use Firebase's .val() method to parse our database info the way we want it
      setSongList(response.val());
    });
  }, []);

  useEffect(() => {
    if (selectedSongTitle) {
      //Filter the selected song before displaying it
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
