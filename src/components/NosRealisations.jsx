const NosRealisations = () => {
  const realisations = [
    {
      id: 1,
      image: "/galerie1.jpg",
      alt: "Réalisation Event Accueil 360 - 1"
    },
    {
      id: 2,
      image: "/galerie2.jpg",
      alt: "Réalisation Event Accueil 360 - 2"
    },
    {
      id: 3,
      image: "/galerie3.jpg",
      alt: "Réalisation Event Accueil 360 - 3"
    },
    {
      id: 4,
      image: "/galerie4.jpg",
      alt: "Réalisation Event Accueil 360 - 4"
    },
    {
      id: 5,
      image: "/bluse vert.jpg",
      alt: "Blouse verte personnalisée"
    },
    {
      id: 6,
      image: "/bluse_blanc.jpg",
      alt: "Blouse blanche personnalisée"
    },
    {
      id: 7,
      image: "/Minicasquette.jpg",
      alt: "Casquette personnalisée"
    },
    {
      id: 8,
      image: "/fauteille.jpg",
      alt: "Impression sur textile d'ameublement"
    }
  ];

  return (
    <section id="realisations" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Nos Réalisations
          </h2>
          <div className="w-16 h-1 bg-red-500 mx-auto"></div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {realisations.map((realisation) => (
            <div
              key={realisation.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={realisation.image} 
                  alt={realisation.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400"><rect width="400" height="400" fill="%23f3f4f6"/><text x="200" y="200" text-anchor="middle" fill="%236b7280" font-family="sans-serif" font-size="16">Image</text></svg>`;
                  }}
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NosRealisations;
