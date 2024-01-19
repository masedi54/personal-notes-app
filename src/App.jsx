import { useState } from "react";
import { getAllNotes } from "./utils/local-data";
import HomePage from "./components/HomePage";
import NotFound from "./error/NotFound";
import AddNotePage from "./components/AddNotePage";
import DetailNotePage from "./components/DetailNotePage";
import { Routes, Route } from "react-router-dom";
import ArsipNotePage from "./components/ArsipNotePage";

const App = () => {
  const notesDefault = getAllNotes();
  const [notes, setNotes] = useState(notesDefault);

  const addNote = (newNote) => setNotes([...notes, newNote]);

  const archiveNote = (id) =>
    setNotes(
      notes.map((note) => {
        if (note.id === id) return { ...note, archived: !note.archived };
        return note;
      })
    );

  const removeNote = (id) => setNotes(notes.filter((note) => note.id !== id));

  return (
    <Routes>
      <Route path={"/*"} element={<NotFound />} />
      <Route
        path={"/"}
        element={<HomePage archiveNote={archiveNote} notes={notes} />}
      />
      <Route path={"/add-note"} element={<AddNotePage addNote={addNote} />} />
      <Route
        path={"/arsip"}
        element={<ArsipNotePage notes={notes} archiveNote={archiveNote} />}
      />
      <Route
        path={"/note/:id"}
        element={
          <DetailNotePage
            notes={notes}
            archiveNote={archiveNote}
            removeNote={removeNote}
          />
        }
      />
    </Routes>
  );
};

export default App;
