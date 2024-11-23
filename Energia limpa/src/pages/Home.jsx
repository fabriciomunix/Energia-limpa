import EnergyCarousel from "../components/Carousel";
import { Link } from 'react-router-dom';


const Home = () => (
  <main>
    <section className="hero bg-light text-center py-5">
      <div className="container">
        <h1>Bem-vindo ao Mundo da Energia Limpa</h1>
        <p>
          Explore como as fontes de energia renováveis estão moldando o futuro sustentável do nosso planeta.
        </p>
        <Link to="/energy-types" className="btn btn-primary mt-3">Saiba Mais</Link>
      </div>
    </section>
    <section className="carousel-section py-5">
      <div className="container">
        <EnergyCarousel />
      </div>
    </section>
  </main>
);

export default Home;
