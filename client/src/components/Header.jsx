import { useState, useEffect } from 'react';
import DarkModeToggle from './DarkModeToggle';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`w-full fixed top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-deep-navy/95 backdrop-blur-sm shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-playfair font-bold text-light-navy dark:text-white">
              Desenrolando Direito
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-light-navy dark:text-body-dark hover:text-gold-accent transition-colors">Início</a>
            <a href="/categorias" className="text-light-navy dark:text-body-dark hover:text-gold-accent transition-colors">Categorias</a>
            <a href="/sobre" className="text-light-navy dark:text-body-dark hover:text-gold-accent transition-colors">Sobre</a>
            <a href="/contato" className="text-light-navy dark:text-body-dark hover:text-gold-accent transition-colors">Contato</a>
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-light-navy dark:text-body-dark hover:text-gold-accent transition-colors">
              🔍
            </button>
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
