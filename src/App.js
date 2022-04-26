import "./App.css";
import { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import firebase from "./firebase";
import SongCard from "./Components/SongCard";

function App() {
  const [selectSong, setSelectSong] = useState([]);
  const [songList, setSongList] = useState([]);

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

  return (
    <div className="App">
      <h1>Welcome to Songs</h1>
      <form action="submit">
        <label htmlFor="newSong">Select a Song</label>
        {/* attach the `handleInputChange` function to our input field */}
        <input type="text" id="newBook" onChange={() => {}} />
        <button>Search</button>
        {songList.map((song) => (
          <div>{song.title}</div>
        ))}
        <SongCard key={""} />
      </form>
    </div>
  );
}

export default App;
