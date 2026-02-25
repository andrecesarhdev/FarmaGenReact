import { Link } from "react-router-dom";


function Navbar() {
  return (
    <>
      <div
        className="w text-white-full flex justify-center py-4
    bg-red-600 text"
      >
        <div className="container flex justify-between text-lg mx-8 text-amber-50">
          <Link to="/home" className="text-2xl text-shadow-white font-bold ">
            FarmaGen 💊
          </Link>
          <div className="flex gap-2 ">
            <Link to="/categorias" className="hover:underline text-shadow-white">
              Categorias
            </Link>
            <Link to="/produtos" className="hover:underline text-shadow-white">
              Produtos
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
