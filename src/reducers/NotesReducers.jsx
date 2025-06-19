import { v4 as uuid } from "uuid";

const notesReducer = (state, { type, payload }) => {
  switch (type) {
    case "TITLE":
      return {
        ...state,
        title: payload,
      };
    case "TEXT":
      return {
        ...state,
        text: payload,
      };
    case "ADD_NOTE":
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            text: state.text,
            title: state.title,
            id: uuid(),
            isPinned: false,
          },
        ],
      };
    case "CLEAR_INPUT":
      return {
        ...state,
        title: "",
        text: "",
      };
    case "PIN":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === payload.id ? { ...note, isPinned: true} : note
        ),
      };
      case "UNPIN":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === payload.id ? { ...note, isPinned: false } : note
        ),
      };
    case "DELETE_NOTE":
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== payload.id),
      };
    case "ARCHIVE_NOTE":
      const archivedNote = state.notes.find((note) => note.id === payload.id);
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== payload.id),
        archive: [...state.archive, archivedNote],
      };
    case "UNARCHIVE_NOTE":
      const unarchivedNote = state.archive.find((note) => note.id === payload.id);
      return {  
        ...state,
        archive: state.archive.filter((note) => note.id !== payload.id),
        notes: [...state.notes, unarchivedNote],
      };

    default:
      return state;
  }
};

export default notesReducer;
