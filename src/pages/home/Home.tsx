

import imghome from '../../assets/img/imghome.webp'; // Adjust the path based on your actual image location


function Home() {
  return (
    <>
     <div
  className="relative min-h-screen bg-cover bg-center flex items-center"
  style={{ backgroundImage: `url(${imghome})` }}
>
  <div className="absolute inset-0 bg-black/10"></div>

  <div className="relative z-10 container mx-auto text-red-700">
    <h2 className="text-7xl font-bold mb-4">
      Seja Bem Vindo!
    </h2>
    <p className="text-3xl max-w-2xl font-bold mb-56">
      Aqui você encontra os melhores produtos da Farmácia Generation
    </p>
  </div>
</div>
    </>
  );
}

export default Home;
