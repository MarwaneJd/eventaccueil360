const Tarif = () => {
  return (
    <section id="tarif" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Nos Tarifs
          </h2>
          <div className="w-16 h-1 bg-red-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Des prix compétitifs pour des services de qualité professionnelle. 
            Impression rapide en 5 minutes avec des matériaux premium.
          </p>
        </div>

        {/* Pricing Images */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Tarif 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="min-h-[600px] flex items-center justify-center p-4">
              <img 
                src="/tarif1.jpeg" 
                alt="Tarifs des Produits - Event Accueil 360" 
                className="w-full h-full max-h-[580px] object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Tarif 2 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="min-h-[600px] flex items-center justify-center p-4">
              <img 
                src="/tarif22.jpeg" 
                alt="Tarifs des Impressions - Event Accueil 360" 
                className="w-full h-full max-h-[580px] object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Impression sur vos propres textiles
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Apportez vos propres vêtements et nous nous occupons de l'impression 
              à des tarifs encore plus avantageux !
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">5 Minutes</h4>
                <p className="text-sm text-gray-600">Impression ultra-rapide</p>
              </div>
              <div className="p-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Qualité Premium</h4>
                <p className="text-sm text-gray-600">95% coton - 5% Lycra</p>
              </div>
              <div className="p-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Prix Abordables</h4>
                <p className="text-sm text-gray-600">Tarifs compétitifs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tarif;
