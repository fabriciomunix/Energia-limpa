import ModalVideo from '../components/ModalVideo';

const solar = '/images/Energia-solar.png';
const eolica = '/images/Energia-eolic.jpg';
const hidreletrica = '/images/energia-hidreletrica.webp'

const EnergyTypes = () => {
  const energies = [
    { 
      name: "Solar", 
      description: "A energia solar é gerada a partir da luz do sol, captada por painéis fotovoltaicos ou coletores solares térmicos. É uma fonte inesgotável, limpa e silenciosa, ideal para reduzir emissões de carbono.", 
      image: solar 
    },
    { 
      name: "Eólica", 
      description: "A energia eólica aproveita a força dos ventos para gerar eletricidade por meio de turbinas. É uma das formas mais limpas de produção de energia, com impacto ambiental mínimo.", 
      image: eolica
    },
    { 
      name: "Hidrelétrica", 
      description: "A energia hidrelétrica utiliza a força da água em movimento, geralmente de rios e reservatórios, para acionar turbinas que geram eletricidade. É uma fonte confiável e amplamente utilizada no mundo.", 
      image: hidreletrica 
    },
  ];

  return (
    <section className="container py-5">
      <h2 className="text-center mb-4">Tipos de Energia Limpa</h2>
      <div className="row g-4 py-5">
        {energies.map((energy) => (
          <div className="col-md-4" key={energy.name}>
            <div className="card h-100 shadow-sm">
              <img 
                src={energy.image} 
                alt={energy.name} 
                className="card-img-top" 
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{energy.name}</h5>
                <p className="card-text">{energy.description}</p>
              </div>
              <div className="card-footer">
                <a 
                  href="https://www.portalsolar.com.br/energia-sustentavel-tudo-o-que-voce-precisa-saber" 
                  className="btn btn-primary w-100"
                >
                  Saiba Mais
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='text-center'>
      <ModalVideo videoUrl="https://www.youtube.com/embed/rs-kBJKCABA?si=Nuu2hIFwckKQNCXl" />
      </div>
    </section>
  );
};

export default EnergyTypes;
