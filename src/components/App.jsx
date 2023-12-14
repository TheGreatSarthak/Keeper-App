import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((value) => (
        <Note key={value.key} title={value.title} content={value.content} />
      ))}
      <Footer />
    </div>
  );
}
export default App;
