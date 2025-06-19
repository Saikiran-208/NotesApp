import React from "react";
import Navbar from "../../components/Navbar.jsx";
import { Fragment } from "react";
import Sidebar from "../../components/Sidebar.jsx";
import NotesCard from "../../components/NotesCard.jsx";
import { useNotes } from "../../context/NotesContext.jsx";

const Home = () => {
  const { title, text, notes, notesDispatch } = useNotes();

  const onTitleChange = (e) => {
    notesDispatch({
      type: "TITLE",
      payload: e.target.value,
    });
  };

  const onTextChange = (e) => {
    notesDispatch({
      type: "TEXT",
      payload: e.target.value,
    });
  };

  const onAddClick = () => {
    notesDispatch({
      type: "ADD_NOTE",
    });
    notesDispatch({
      type: "CLEAR_INPUT",
    });
  };
  const pinnedNotes =
    notes?.length > 0 && notes.filter((note) => note.isPinned);
  const otherNotes =
    notes?.length > 0 && notes.filter((note) => !note.isPinned);
  return (
    <Fragment>
      <Navbar />
      <main className="flex gap-3">
        <Sidebar />
        <div className="flex flex-col w-screen">
          <div className="flex flex-col w-[300px] relative border-2 border-gray-300 p-3 rounded-md mt-5 self-center">
            <input
              value={title}
              onChange={onTitleChange}
              type="text"
              placeholder="Enter title"
              className="pl-1"
            />
            <textarea
              value={text}
              onChange={onTextChange}
              className="border border-gray-300 rounded-md p-2 mt-2"
              placeholder="Enter Text"
            />
            <button
              disabled={title.length === 0}
              onClick={onAddClick}
              className="absolute bottom-0 right-1"
            >
              {" "}
              <span className="material-icons-outlined bg-indigo-400 text-black rounded-2xl ">
                add
              </span>
            </button>
          </div>
          {pinnedNotes?.length > 0 && (
            <div className="ml-5">
              <h3 className="mt-14 font-bold">Pinned Notes</h3>
              <div className=" flex flex-wrap gap-4">
                {pinnedNotes?.length > 0 &&
                  pinnedNotes.map(({ id, title, text, isPinned }) => (
                    <NotesCard
                      key={id}
                      id={id}
                      title={title}
                      text={text}
                      isPinned={isPinned}
                    />
                  ))}
              </div>
            </div>
          )}
          {otherNotes?.length > 0 && (
            <div className="ml-5">
              <h3 className="mt-12 font-bold">Notes</h3>
              <div className=" flex flex-wrap gap-4">
                {otherNotes?.length > 0 &&
                  otherNotes.map(({ id, title, text, isPinned }) => (
                    <NotesCard
                      key={id}
                      id={id}
                      title={title}
                      text={text}
                      isPinned={isPinned}
                    />
                  ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </Fragment>
  );
};

export default Home;
