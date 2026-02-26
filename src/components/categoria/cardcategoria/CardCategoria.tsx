import { Link } from "react-router-dom";
import type Categoria from "../../../models/Categoria";

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    <div
      className="bg-white rounded-xl shadow-md border border-gray-100
                 hover:shadow-lg transition-shadow flex flex-col justify-between"
    >
      {/* Cabeçalho */}
      <header className="px-6 py-4 border-b border-gray-100">
        <h3 className="text-lg font-semibold text-gray-800">
          Categoria
        </h3>
      </header>

      {/* Conteúdo */}
      <div className="px-6 py-4 flex-1">
        <p className="text-gray-600 leading-relaxed">
          {categoria.descricao}
        </p>
      </div>

      {/* Ações */}
      <div className="flex border-t border-gray-100">
        <Link
          to={`/editarcategoria/${categoria.id}`}
          className="w-full text-center py-3 text-green-700 font-medium
                     hover:bg-green-50 transition-colors"
        >
          Editar
        </Link>

        <Link
          to={`/deletarcategoria/${categoria.id}`}
          className="w-full text-center py-3 text-red-600 font-medium
                     hover:bg-red-50 transition-colors"
        >
          Excluir
        </Link>
      </div>
    </div>
  );
}

export default CardCategoria;