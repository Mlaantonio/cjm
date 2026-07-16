import React from 'react';
import './App.css';
import logo from './logo.png';

function App() {
  return (
    <div className="app-container">
      {/* HEADER / NAVBAR */}
      <header className="navbar">
        <div className="logo-container">
          <img src={logo} alt="CJM Infocell Logo" className="logo" />
        </div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#servicos">Serviços</a>
          <a href="#quem-somos">Quem Somos</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      {/* SEÇÃO HOME */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <h1>Excelência e Confiança em Assitência Técnica</h1>
          <p>A solução definitiva para o seu smartphone, tablet, notebook e outros equipamentos de informática.</p>
          <a href="#contato" className="btn-primary">Fale Conosco</a>
        </div>
      </section>

      {/* SEÇÃO SERVIÇOS */}
      <section id="servicos" className="services-section">
        <h2>Nossos Serviços</h2>
        <div className="cards-container">
          <div className="card">
            <h3>Manutenção de Smartphones</h3>
            <p>Reparos de telas, baterias e placas com peças de alta qualidade e garantia.</p>
          </div>
          <div className="card">
            <h3>Assistência Técnica</h3>
            <p>Diagnóstico e conserto de equipamentos de informática e dispositivos móveis.</p>
          </div>
          <div className="card">
            <h3>Acessórios Premium</h3>
            <p>Cabos, carregadores, capinhas e películas para proteger e otimizar seu aparelho.</p>
          </div>
        </div>
      </section>

      {/* SEÇÃO QUEM SOMOS */}
      <section id="quem-somos" className="about-section">
        <h2>Quem Somos</h2>
        <div className="about-content">
          <p>
            A <strong>CJM Infocell</strong> nasceu com o propósito de oferecer a melhor assistÊncia técnica, 
            com total transparência e eficiência. Nossa equipe é formada por profissionais apaixonados 
            por tecnologia, prontos para resolver os problemas do seu dia a dia com agilidade e credibilidade.
          </p>
        </div>
      </section>

{/* SEÇÃO CONTATO */}
      <section id="contato" className="contact-section">
        <h2>Entre em Contato</h2>
        <div className="contact-info">
          <p><strong>Endereço: </strong> R. Caramurus, 200 - Jardim São Francisco, Santa Bárbara d'Oeste - SP</p>
          <p><strong>Telefone/WhatsApp:</strong> <a href="tel:+551934556254" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-silver)', textDecoration: 'underline' }}>(19) 3455-6254</a></p>
          <p><strong>E-mail: </strong><a href="mailto:contato@cjm.servicos.ws" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-silver)', textDecoration: 'underline' }}>contato@cjm.servicos.ws</a></p>
          
          {/* Contêiner do Mapa do Google */}
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4603.457716136726!2d-47.39792322375402!3d-22.76782833292141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c89d8d1fcea5bd%3A0x1f2bb969620f27c4!2sCJM%20Infocell!5e1!3m2!1spt-BR!2sbr!4v1784072276468!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="strict-origin-when-cross-origin"
              title="Mapa de localização CJM Infocell"
            ></iframe>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} CJM Infocell. Todos os direitos reservados. By <a href="https://github.com/mariocoldor" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-silver)', textDecoration: 'underline' }}>Mario Coldor</a>.</p>
      </footer>
    </div>
  );
}

export default App;