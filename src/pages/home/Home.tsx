import imghome from "../../assets/img/home2.webp";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section
      className="relative min-h-[90vh] bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${imghome})` }}
    >
      {/* Overlay institucional */}
      <div className="absolute inset-0 bg-green-900/55"></div>

      {/* Conteúdo */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Sua saúde em primeiro lugar
        </h1>

        <p className="text-lg md:text-2xl max-w-2xl mb-10 text-gray-100">
          Um ambiente moderno, seguro e organizado para gerenciar categorias
          e produtos com qualidade e confiança.
        </p>

        <div className="flex gap-4">
          <Link
            to="/categorias"
            className="bg-green-600 hover:bg-green-700 text-white
                       px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Ver Categorias
          </Link>

          <Link
            to="/cadastrarcategoria"
            className="bg-white hover:bg-gray-100 text-green-700
                       px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Nova Categoria
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;