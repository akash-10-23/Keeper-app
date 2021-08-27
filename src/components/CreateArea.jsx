import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

    const [note,setNote] = useState({
        title: "",
        content: ""
    });

    const [initial,setInitial] = useState(false);

    function handleChange(event){

        const {name,value} = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        });
    }

    function newNote(event){
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

  return (
    <div>
      <form className="create-note">
        {initial && 
        <input name="title" 
            value={note.title} 
            placeholder="Title" 
            onChange={handleChange}
            autoComplete="off"
        />
        }
        
        <textarea name="content" 
            value={note.content} 
            placeholder="Take a note..." 
            rows={initial?"3":"1"} 
            onChange={handleChange} 
            onClick={() => {
                setInitial(true);
            }}
        />

        <Zoom in={initial}>
            <Fab onClick={newNote}>
                <AddIcon />
            </Fab>
        </Zoom>
        
      </form>
    </div>
  );
}

export default CreateArea;