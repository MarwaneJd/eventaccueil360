const APropos = () => {
  return (
    <section id="apropos" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            À propos de nous
          </h2>
          <div className="w-16 h-1 bg-red-500 mx-auto mb-8"></div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Entreprise spécialisée dans l'impression sur textiles, une variété de produits est proposée 
            (gilets, t-shirts, casquettes, etc.). Des matériaux de haute qualité composés à 95% de 
            coton et 5% de Lycra. Impression en 5 minutes. Il est même possible d'effectuer des 
            impressions sur vos propres textiles à un tarif abordable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default APropos;
