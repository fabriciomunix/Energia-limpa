import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = 'https://673fa546a9bc276ec4b933f2.mockapi.io/energy-growth';

const EnergyGrowthTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setData(response.data); 
      } catch (err) {
        setError('Erro ao carregar os dados.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Evolução das Energias Renováveis</h2>
      <p className="text-muted text-center">
        Veja como as fontes de energia renováveis vêm evoluindo ao longo dos anos.
      </p>
      
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Ano</th>
              <th scope="col">Solar (%)</th>
              <th scope="col">Eólica (%)</th>
              <th scope="col">Hidrelétrica (%)</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((item) => (
                <tr key={item.id}>
                  <td>{item.YEAR || 'N/A'}</td> 
                  <td>{item.SOLAR || 'N/A'}%</td> 
                  <td>{item.WIND || 'N/A'}%</td> 
                  <td>{item.HYDRO || 'N/A'}%</td> 
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center">Nenhum dado disponível</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnergyGrowthTable;
