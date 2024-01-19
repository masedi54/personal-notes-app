import { Link } from "react-router-dom";

const Appbar = () => {
  return (
    <nav className="bg-cyan-800 text-white flex items-center justify-between p-4">
      <Link className="text-2xl font-bold" to="/">
        Notes
      </Link>
      <div>
        <Link className="nav-link active mx-4" to="/">
          Home
        </Link>
        <Link className="nav-link active mx-4" to="/arsip">
          Archive
        </Link>
      </div>
    </nav>
  );
};

export default Appbar;
