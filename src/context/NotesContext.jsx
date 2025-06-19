import { createContext,useContext,useReducer } from "react";
import NotesReducers from "../reducers/NotesReducers";

const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  const initialState = {
    title: "",
    text: "",
    notes: [],
    archive: [],
   
  };

  const [{ title, text, notes,archive }, notesDispatch] = useReducer(
    NotesReducers,
    initialState
  );

  return (
    <NotesContext.Provider value={{  title, text, notes, notesDispatch,archive } }>
      {children}
    </NotesContext.Provider>
  );
}


const useNotes = () => useContext(NotesContext);

export { NotesProvider, useNotes };