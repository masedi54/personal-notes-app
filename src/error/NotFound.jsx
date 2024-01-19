import { Link } from "react-router-dom";
import Appbar from "../components/Appbar";

const NotFoundPage = () => {
  return (
    <>
      <Appbar />
      <h1 className="text-5xl font-medium mt-5 text-center">
        404 Halaman tidak ada !!
      </h1>
      <div className="flex justify-center mt-5">
        <Link to="/" className="text-blue-500 underline">
          Kembali
        </Link>
      </div>
    </>
  );
};

export default NotFoundPage;
