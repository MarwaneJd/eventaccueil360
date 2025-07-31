const Hero = () => {
  return (
    <section id="accueil" className="pt-20 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gray-800">Impression textile </span>
                <span className="text-red-500">haute qualité</span>
              </h1>
              
              <div className="space-y-2">
                <p className="text-xl md:text-2xl text-gray-600">
                  95% coton - 5% Lycra • Impression en 5 minutes
                </p>
              </div>
            </div>
            
            <p className="text-lg text-gray-600 max-w-xl">
              Découvrez notre service d'impression textile professionnel avec des matériaux 
              de qualité supérieure et un service ultra-rapide pour tous vos événements et besoins professionnels.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="inline-block bg-white border-2 border-gray-300 text-gray-700 font-medium py-3 px-8 rounded-full hover:bg-gray-50 transition-colors duration-200 text-center"
              >
                Nos services
              </a>
              <a
                href="#produits"
                className="inline-block bg-transparent border-2 border-gray-300 text-gray-700 font-medium py-3 px-8 rounded-full hover:bg-gray-50 transition-colors duration-200 text-center"
              >
                Voir nos produits
              </a>
            </div>
          </div>

          {/* T-shirt mockup */}
          <div className="relative">
            <div className="flex justify-center items-center">
              <img 
                src="/hero-tshirt.png" 
                alt="T-shirt Event Accueil 360" 
                className="w-full max-w-lg h-auto object-contain animate-bounce"
                style={{
                  animation: 'float 3s ease-in-out infinite'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
