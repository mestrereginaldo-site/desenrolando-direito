const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-deep-navy to-light-navy text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-4">
              Descomplicando o Direito Brasileiro
            </h1>
            <p className="text-xl text-body-dark mb-8">
              Conteúdo jurídico acessível e de qualidade para todos
            </p>
            <button className="bg-gold-accent text-deep-navy px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
              Explorar Artigos
            </button>
          </div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-playfair font-bold text-light-navy dark:text-white text-center mb-12">
          Artigos em Destaque
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Artigo 1 */}
          <div className="bg-white dark:bg-deep-navy rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gray-300 dark:bg-gray-700"></div>
            <div className="p-6">
              <span className="inline-block bg-gold-accent text-deep-navy px-3 py-1 rounded-full text-sm font-semibold mb-2">
                Direito Civil
              </span>
              <h3 className="text-xl font-playfair font-semibold text-light-navy dark:text-white mb-2">
                Entenda os seus direitos como consumidor
              </h3>
              <p className="text-muted-text mb-4">
                Saiba como proceder em casos de produtos com defeito e serviços mal prestados...
              </p>
              <div className="flex items-center justify-between text-sm text-muted-text">
                <span>Dr. João Silva</span>
                <span>15 Nov 2024</span>
              </div>
            </div>
          </div>

          {/* Artigo 2 */}
          <div className="bg-white dark:bg-deep-navy rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gray-300 dark:bg-gray-700"></div>
            <div className="p-6">
              <span className="inline-block bg-gold-accent text-deep-navy px-3 py-1 rounded-full text-sm font-semibold mb-2">
                Direito Trabalhista
              </span>
              <h3 className="text-xl font-playfair font-semibold text-light-navy dark:text-white mb-2">
                FGTS: Tudo o que você precisa saber
              </h3>
              <p className="text-muted-text mb-4">
                Guia completo sobre o Fundo de Garantia do Tempo de Serviço...
              </p>
              <div className="flex items-center justify-between text-sm text-muted-text">
                <span>Dra. Maria Santos</span>
                <span>12 Nov 2024</span>
              </div>
            </div>
          </div>

          {/* Artigo 3 */}
          <div className="bg-white dark:bg-deep-navy rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gray-300 dark:bg-gray-700"></div>
            <div className="p-6">
              <span className="inline-block bg-gold-accent text-deep-navy px-3 py-1 rounded-full text-sm font-semibold mb-2">
                Direito Penal
              </span>
              <h3 className="text-xl font-playfair font-semibold text-light-navy dark:text-white mb-2">
                Habeas Corpus: Quando e como usar
              </h3>
              <p className="text-muted-text mb-4">
                Entenda o instrumento jurídico que protege a liberdade de locomoção...
              </p>
              <div className="flex items-center justify-between text-sm text-muted-text">
                <span>Dr. Pedro Costa</span>
                <span>10 Nov 2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
