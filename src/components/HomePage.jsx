import Appbar from "./Appbar";
import { Link } from "react-router-dom";
import Notes from "./Notes";
import PropTypes from "prop-types";

const HomePage = (props) => {
  const { archiveNote, notes } = props;
  const activeNotes = notes.filter((note) => !note.archived);

  return (
    <>
      <Appbar />
      <div className="container w-full mx-auto mb-12 px-4 pt-5 md:pt-10 h-full flex flex-col items-center justify-center">
        <Link to="/add-note" className="mb-10 block text-center">
          <button className="w-full md:w-auto bg-cyan-800 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
            Tambah catatan
          </button>
        </Link>
        {activeNotes.length !== 0 ? (
          <Notes notes={activeNotes} archiveNote={archiveNote} />
        ) : (
          <h1 className="text-center text-2xl font-medium text-gray-600">
            Tidak ada catatan
          </h1>
        )}
      </div>
      <footer className="fixed bottom-0 left-0 right-0 bg-cyan-800 text-center py-4">
        <p className="text-white">@ 2024 all right reserved</p>
      </footer>
    </>
  );
};

HomePage.propTypes = {
  archiveNote: PropTypes.func.isRequired,
  notes: PropTypes.array.isRequired,
};

export default HomePage;
