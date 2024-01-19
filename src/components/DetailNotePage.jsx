import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import Appbar from "./Appbar";
import { useParams } from "react-router-dom";

const DetailNotePage = (props) => {
  const { archiveNote, removeNote, notes } = props;
  const idNote = useParams().id;
  const navigate = useNavigate();

  const noteDetail = notes.find((note) => note.id === idNote);

  return (
    <>
      <Appbar />
      <div className="w-1/2 my-20 mx-auto py-20 px-10 shadow-md rounded-xl bg-white p-3 border border-gray-300">
        <div className="text-center">
          <h5 className="mb-3">{noteDetail.title}</h5>
          <p className="mb-3">{noteDetail.body}</p>
          <small>Dibuat pada : {noteDetail.createdAt}</small>
        </div>
        <div className="mt-10">
          <div className="flex justify-center">
            <button
              className="btn btn-dark me-3"
              onClick={() => {
                archiveNote(noteDetail.id);
                location.pathname != "/" ? navigate("/") : null;
              }}
            >
              {!noteDetail.archived ? "Archive" : "Cancel Archive"}
            </button>
            <button
              onClick={() => {
                removeNote(noteDetail.id);
                navigate("/");
              }}
              type="button"
              className="btn bg-red-500 text-white border-0 rounded-md px-2 shadow-md"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      <footer className="fixed bottom-0 left-0 right-0 bg-cyan-800 text-center py-4">
        <p className="text-white">@ 2024 all right reserved</p>
      </footer>
    </>
  );
};

DetailNotePage.propTypes = {
  notes: PropTypes.array.isRequired,
  removeNote: PropTypes.func.isRequired,
  archiveNote: PropTypes.func.isRequired,
};

export default DetailNotePage;
