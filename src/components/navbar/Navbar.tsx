import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="w-full bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          to="/home"
          className="text-2xl font-bold text-green-700 flex items-center gap-2"
        >
          <span className="text-3xl">💊</span>
          Farma<span className="text-green-900">Gen</span>
        </Link>

        {/* Menu */}
        <div className="flex items-center gap-6 text-gray-700 font-medium">
          <Link
            to="/categorias"
            className="hover:text-green-700 transition-colors"
          >
            Categorias
          </Link>

          <Link
            to="/cadastrarcategoria"
            className="bg-green-600 text-white px-4 py-2 rounded-lg
                       hover:bg-green-700 transition-colors"
          >
            Nova Categoria
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;