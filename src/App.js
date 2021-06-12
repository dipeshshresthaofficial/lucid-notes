import {useState} from "react";
import {nanoid} from "nanoid";
import NoteLists from "./components/NoteLists";
import SearchBar from "./components/SearchBar";



function App() {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState('');

  const handleAddNewNote = (description) => {
    const date = new Date();
    let newNote = {
      id: nanoid(),
      description: description,
      date: date.toLocaleDateString()
    };
    setNotes([newNote, ...notes])

  }

  const handleDeleteNote = (id) => {
    let newNotes = notes.filter(note => note.id !== id);
    setNotes(newNotes);
  }

  return (
    <div className="App">
      <SearchBar
        handleSearchText={setSearchText}
      />
      <NoteLists
        notes={notes.filter(note => note.description.toLowerCase().includes(searchText))}
        handleAddNewNote={handleAddNewNote}
        handleDeleteNote={handleDeleteNote}
      />
    </div>
  );
}

export default App;



