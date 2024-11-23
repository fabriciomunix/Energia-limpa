import { FaSun, FaWind, FaDollarSign, FaRegThumbsUp } from 'react-icons/fa';
import { GiWaterDrop, GiFactory, GiEarthAmerica, GiHealthCapsule } from 'react-icons/gi';

const Benefits = () => (
  <main>
    
    <section className="hero bg-light text-center py-5">
      <div className="container">
        <h2 className="display-4 mb-3">Benefícios da Energia Limpa</h2>
        <p className="lead">
          A adoção de fontes de energia limpa traz uma transformação significativa para o meio ambiente, economia e sociedade, garantindo um futuro mais sustentável para as próximas gerações.
        </p>
      </div>
    </section>

 
    <section className="container py-5">
      <div className="row">
        
        <div className="col-md-6">
          <h3>Vantagens da Energia Limpa</h3>
          <p>As fontes de energia limpa oferecem uma série de benefícios que vão desde a preservação ambiental até vantagens econômicas de longo prazo.</p>
          <ul className="list-unstyled">
            <li className="d-flex align-items-center mb-3">
              <FaSun size={30} className="text-success me-3" />
              <span>Redução da emissão de gases de efeito estufa</span>
            </li>
            <li className="d-flex align-items-center mb-3">
              <FaWind size={30} className="text-success me-3" />
              <span>Diminuição da poluição do ar e da água</span>
            </li>
            <li className="d-flex align-items-center mb-3">
              <FaDollarSign size={30} className="text-success me-3" />
              <span>Economia a longo prazo nos custos energéticos</span>
            </li>
            <li className="d-flex align-items-center mb-3">
              <GiFactory size={30} className="text-success me-3" />
              <span>Criação de empregos verdes e novas oportunidades de mercado</span>
            </li>
            <li className="d-flex align-items-center mb-3">
              <GiHealthCapsule size={30} className="text-success me-3" />
              <span>Melhoria na saúde pública devido à redução da poluição</span>
            </li>
            <li className="d-flex align-items-center mb-3">
              <GiEarthAmerica size={30} className="text-success me-3" />
              <span>Preservação dos recursos naturais e combate à mudança climática</span>
            </li>
          </ul>
        </div>

      
        <div className="col-md-6">
          <h3>Desafios da Energia Limpa</h3>
          <p>Apesar dos benefícios, a transição para fontes de energia limpa apresenta alguns desafios que precisam ser superados para uma adoção mais ampla.</p>
          <ul className="list-unstyled">
            <li className="d-flex align-items-center mb-3">
              <FaRegThumbsUp size={30} className="text-danger me-3" />
              <span>Alto custo inicial de implementação e infraestrutura</span>
            </li>
            <li className="d-flex align-items-center mb-3">
              <GiWaterDrop size={30} className="text-danger me-3" />
              <span>Dependência de condições climáticas (vento, sol, etc.)</span>
            </li>
            <li className="d-flex align-items-center mb-3">
              <GiFactory size={30} className="text-danger me-3" />
              <span>Infraestrutura limitada e necessidade de atualizações tecnológicas</span>
            </li>
            <li className="d-flex align-items-center mb-3">
              <GiEarthAmerica size={30} className="text-danger me-3" />
              <span>Resistência à mudança devido a hábitos de consumo e interesses econômicos estabelecidos</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

 
    <section className="bg-light py-5">
      <div className="container text-center">
        <h3>Impacto Social e Econômico</h3>
        <p className="lead">
          A transição para fontes de energia limpa não só melhora o meio ambiente, mas também promove o crescimento econômico e social. A geração de empregos, o aumento da eficiência energética e a redução dos custos com saúde e meio ambiente são apenas algumas das vantagens de um futuro sustentável.
        </p>
        <div className="row">
          <div className="col-md-4">
            <h4>Empregos Verdes</h4>
            <p>O setor de energia renovável cria milhares de novas oportunidades de emprego, desde instalação de painéis solares até manutenção de turbinas eólicas.</p>
          </div>
          <div className="col-md-4">
            <h4>Redução de Custos com Saúde</h4>
            <p>Com menos poluição, os custos com doenças respiratórias e cardiovasculares são reduzidos, promovendo um bem-estar maior para a sociedade.</p>
          </div>
          <div className="col-md-4">
            <h4>Economia de Longo Prazo</h4>
            <p>Embora o investimento inicial seja significativo, as fontes de energia limpa oferecem baixos custos operacionais e menos dependência de combustíveis fósseis.</p>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default Benefits;
