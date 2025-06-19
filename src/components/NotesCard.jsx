import React from "react";
import { useNotes } from "../context/NotesContext";

const NotesCard = ({ id, title, text,isPinned }) => {
    const { notesDispatch,archive } = useNotes();

     const findNotesInArchive = (archive, id) =>{
      return archive.some(note => note.id === id);
    }
     const isNoteInArchive = findNotesInArchive(archive, id);

    const onPinClick = (id) => {
       !isPinned? notesDispatch({
            type: "PIN",
            payload: {id},
            
        }):notesDispatch({
            type: "UNPIN",
            payload: { id },
        });

    }

    const onDeleteClick = (id) => {
        notesDispatch({
            type: "DELETE_NOTE",
            payload: { id },
        });
    }
    const onArchiveClick = (id) => {
        isNoteInArchive ? notesDispatch({
            type: "UNARCHIVE_NOTE",
            payload: { id },
        }) :
        notesDispatch({
            type: "ARCHIVE_NOTE",
            payload: { id },
        });
    }

   

   

  return (
    <div
      className="w-[300px] border border-gray-400 rounded-md p-2 mt-2"
      key={id}
    >
      <div className="flex justify-between">
        <p>{title}</p>
        {
          !isNoteInArchive ? <button onClick={()=> onPinClick(id)}>
          {" "}
          <span className={isPinned ? 'material-icons' :'material-icons-outlined' }>push_pin</span>
        </button> : <></>
        }
        
      </div>
      <div className="flex flex-col border-t-1 border-gray-300 pt-2">
        <p>{text}</p>
        <div className="ml-auto ">
          <button onClick={()=>onArchiveClick(id)}>
            {" "}
            <span className={isNoteInArchive?"material-icons":"material-icons-outlined"}>archive</span>
          </button>
          <button onClick={()=>onDeleteClick(id)}>
            {" "}
            <span className="material-icons-outlined">delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotesCard;
