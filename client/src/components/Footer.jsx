const Footer = () => {
  return (
    <footer className="bg-deep-navy text-body-dark py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Coluna 1: Sobre */}
          <div>
            <h3 className="text-white font-playfair text-lg font-semibold mb-4">Sobre</h3>
            <p className="text-body-dark">
              Descomplicando o Direito Brasileiro através de conteúdo jurídico acessível 
              e de qualidade, produzido por advogados especializados.
            </p>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h3 className="text-white font-playfair text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-gold-accent transition-colors">Início</a></li>
              <li><a href="/categorias" className="hover:text-gold-accent transition-colors">Categorias</a></li>
              <li><a href="/sobre" className="hover:text-gold-accent transition-colors">Sobre</a></li>
              <li><a href="/contato" className="hover:text-gold-accent transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Coluna 3: Newsletter */}
          <div>
            <h3 className="text-white font-playfair text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-body-dark mb-4">Receba atualizações jurídicas em seu email.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Seu email" 
                className="flex-grow px-3 py-2 rounded-l-lg text-light-navy"
              />
              <button className="bg-gold-accent text-white px-4 py-2 rounded-r-lg hover:bg-yellow-500 transition-colors">
                Assinar
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-body-dark">
          <p>&copy; 2024 Desenrolando Direito. Conteúdo produzido por advogados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
