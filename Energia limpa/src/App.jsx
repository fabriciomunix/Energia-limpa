  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  import Header from './components/Header';
  import Footer from './components/Footer';
  import Home from './pages/Home';
  import EnergyTypes from './pages/EnergyTypes';
  import Benefits from './pages/Benefits';
  import Contact from './pages/Contact';
  import './styles/main.scss';
  import EnergyGrowthTable from './pages/Energygrowth';

  function App() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/energy-types" element={<EnergyTypes />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/energy-growth" element={<EnergyGrowthTable />} />
        </Routes>
        <Footer />
      </Router>
    );
  }

  export default App;