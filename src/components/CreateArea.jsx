import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
    const [isExpanded,setExpanded]=useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote((preNote) => {
      return {
        ...preNote,
        [name]: value,
      };
    });
  };
  const submitNote = (event) => {
    props.onAdd(note);
    event.preventDefault();
    setNote({
      title: "",
      content: "",
    });
  };
  function expand(){
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
    {isExpanded && (<input
        onChange={handleChange}
        name="title"
        placeholder="Title"
        value={note.title}
    />)}
        <textarea
          onClick={expand}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3: 1}
          value={note.content}
        />
        <Zoom in={isExpanded}><Fab onClick={submitNote}>
          <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
