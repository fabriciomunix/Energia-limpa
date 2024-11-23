import React, { useState, useEffect } from 'react';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

 
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('contactFormData'));
    if (savedData) {
      setFormData(savedData); 
    }
  }, []);

 
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();
    
   
    localStorage.setItem('contactFormData', JSON.stringify(formData));

   
    alert('Dados salvos com sucesso!');
  };

  return (
    <main>
      <section className="hero bg-light text-center py-5">
        <div className="container">
          <h2>Fale Conosco</h2>
          <p>Entre em contato para saber mais sobre energia limpa e como podemos ajudar.</p>
        </div>
      </section>
      <section className="container py-5">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Nome</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Digite seu nome"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Digite seu email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Mensagem</label>
            <textarea
              className="form-control"
              id="message"
              rows="4"
              placeholder="Escreva sua mensagem"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-success">Enviar</button>
        </form>
      </section>
    </main>
  );
};

export default Contact;
