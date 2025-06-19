import React from "react";
import Navbar from "../../components/Navbar.jsx";
import { Fragment } from "react";
import Sidebar from "../../components/Sidebar.jsx";
import { useNotes } from "../../context/NotesContext.jsx";
import NotesCard from "../../components/NotesCard.jsx";

const Archive = () => {
  const { archive } = useNotes();
  return (
    <Fragment>
      <Navbar />
      <main className="flex gap-3">
        <Sidebar />
        <div className="mt-5 ml-5">

        <h3 className="font-bold ">Archived Notes</h3>
          <div className=" flex flex-wrap gap-4 w-screen ">
            {archive?.length > 0 &&
              archive.map(({ id, title, text, isPinned }) => (
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
      </main>
    </Fragment>
  );
};

export default Archive;
