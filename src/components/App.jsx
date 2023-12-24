import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((preNotes) => {
      return [...preNotes, newNote];
    });
  }
  function deleteNote(id) {
    setNotes((preNotes) => {
      return preNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((value, index) => (
        <Note
          key={index}
          id={index}
          title={value.title}
          content={value.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}
export default App;
