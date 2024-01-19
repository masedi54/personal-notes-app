import PropTypes from "prop-types";
import Appbar from "./Appbar";
import Notes from "./Notes";

const ArsipNotePage = (props) => {
  const { notes, archiveNote } = props;

  const noteArchive = notes.filter((note) => note.archived);

  return (
    <>
      <Appbar />
      {noteArchive.length !== 0 ? (
        <div className="mt-5">
          <Notes notes={noteArchive} archiveNote={archiveNote} />
        </div>
      ) : (
        <h3 className="text-center display-1 fw-semibold fo m-20">
          Belum ada catatan arsip
        </h3>
      )}
      <footer className="fixed bottom-0 left-0 right-0 bg-cyan-800 text-center py-4">
        <p className="text-white">@ 2024 all right reserved</p>
      </footer>
    </>
  );
};

ArsipNotePage.propTypes = {
  archiveNote: PropTypes.func.isRequired,
  notes: PropTypes.array.isRequired,
};

export default ArsipNotePage;
