import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FormCategoria from "./components/categoria/formcategoria/FormCategoria";
import ListaCategorias from "./components/categoria/listacategorias/ListaCategorias";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import DeletarCategoria from "./components/deletarCategoria/DeletarCategoria";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  
  return (
    <>
    
    <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh] bg-gray-50">
          <main className="max-w-7xl mx-auto px-4 py-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<ListaCategorias />} />
              <Route path="/cadastrarcategoria" element={<FormCategoria />} />
              <Route path="/editarcategoria/:id" element={<FormCategoria />} />
              <Route
                path="/deletarcategoria/:id"
                element={<DeletarCategoria />}
              />
            </Routes>
          </main>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
