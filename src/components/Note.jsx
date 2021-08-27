import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';

function Note(props){

    function delNote(){
        props.onDelete(props.id);
    }

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick= {delNote}>
               <DeleteIcon /> 
            </button>
        </div>
    );
}

export default Note;