import { Link } from 'react-router-dom';
const logo = `/images/logo.png`;

const Header = () => (
  <header className="bg-success text-white p-3">
    <nav className="container navbar navbar-expand-lg navbar-light">
      <Link to="/" className="navbar-brand d-flex align-items-center">
        <img 
          src={logo} 
          alt="logo" 
          height="40" 
          className="me-2" 
        />
        <h1 className="mb-0 fs-4">Clean Energy</h1> 
      </Link>
      <button 
        className="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNav" 
        aria-controls="navbarNav" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link text-white">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/energy-types" className="nav-link text-white">Tipos de Energia</Link>
          </li>
          <li className="nav-item">
            <Link to="/benefits" className="nav-link text-white">Benefícios</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link text-white">Contato</Link>
          </li>
          <li className="nav-item">
            <Link to="/energy-growth" className="nav-link text-white">Crescimento da energia renovável</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;
