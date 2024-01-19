import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Appbar";
import PropTypes from "prop-types";

const AddNotePage = ({ addNote }) => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  return (
    <>
      <Navbar />
      <div className="mt-5 p-5 mx-auto max-w-screen-md">
        <div className="p-3 col-lg-4 border rounded-3 mx-auto bg-white shadow-lg">
          <h1 className="text-center mb-3 text-2xl font-bold text-cyan-800">
            Form Tambah catatan
          </h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const data = {
                id: `notes-${+new Date()}`,
                title,
                body,
                archived: false,
                createdAt: new Date().toISOString(),
              };
              addNote(data);
              navigate("/");
            }}
            className="space-y-4"
          >
            <div>
              <label
                htmlFor="title"
                className="block mb-1 text-sm font-medium text-gray-800"
              >
                Title
              </label>
              <input
                placeholder="Judul catatan"
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-300"
                autoFocus
              />
            </div>
            <div>
              <label
                htmlFor="body"
                className="block mb-1 text-sm font-medium text-gray-800"
              >
                Body
              </label>
              <textarea
                placeholder="Deskripsi catatan"
                onChange={(e) => setBody(e.target.value)}
                className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-300"
                rows="3"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-3 py-2 text-white bg-cyan-800 rounded-md hover:bg-blue-600"
            >
              Tambah Catatan
            </button>
          </form>
        </div>
      </div>
      <footer className="fixed bottom-0 left-0 right-0 bg-cyan-800 text-center py-4">
        <p className="text-white">@ 2024 all right reserved</p>
      </footer>
    </>
  );
};

AddNotePage.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default AddNotePage;
