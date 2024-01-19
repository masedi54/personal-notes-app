import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Notes = ({ archiveNote, notes }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap gap-4 justify-center mb-8">
      {notes.map((item) => (
        <div
          key={item.id}
          className="w-64 rounded-lg p-4 shadow bg-gray-200 hover:bg-gray-300"
        >
          <div className="flex flex-col justify-between h-full">
            <div>
              <h5 className="text-xl font-medium mb-2 truncate">
                {item.title}
              </h5>
              <p className="text-gray-700 text-base mb-4 line-clamp-3">
                {item.body.substr(0, 80)}...
              </p>
              <small className="text-gray-500 block mb-2">
                Dibuat pada: {item.createdAt}
              </small>
            </div>
            <div className="mt-auto">
              <div className="flex gap-2">
                <Link
                  to={`/note/${item.id}`}
                  className="btn btn-warning w-full mt-2"
                >
                  Details
                </Link>
                <button
                  className="btn btn-dark w-full mt-2"
                  onClick={() => {
                    archiveNote(item.id);
                    location.pathname != "/" ? navigate("/") : null;
                  }}
                >
                  {item.archived ? "Cancel Archive" : "Archive"}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

Notes.propTypes = {
  archiveNote: PropTypes.func.isRequired,
  notes: PropTypes.array.isRequired,
};

export default Notes;
