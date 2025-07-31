const Produits = () => {
  const produits = [
    {
      id: 1,
      name: "T-shirts",
      description: "Personnalisation complète avant/arrière",
      image: "/hero-tshirt.png",
    },
    {
      id: 2,
      name: "Robes",
      description: "Idéal pour les groupes et événements",
      image: "/robe gris.jpg",
    },
    {
      id: 3,
      name: "Casquettes",
      description: "Personnalisation sur le devant ou les côtés",
      image: "/casquettes.jpg",
    },
    {
      id: 4,
      name: "Sacs",
      description: "Publicité mobile pour votre entreprise",
      image: "/sac_produit.jpg",
    }
  ];

  return (
    <section id="produits" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Nos Produits
          </h2>
          <div className="w-16 h-1 bg-red-500 mx-auto"></div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {produits.map((produit) => (
            <div
              key={produit.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Product Image */}
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img 
                  src={produit.image} 
                  alt={produit.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="%23f3f4f6"/><text x="200" y="150" text-anchor="middle" fill="%236b7280" font-family="sans-serif" font-size="16">${produit.name}</text></svg>`;
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {produit.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {produit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Produits;
