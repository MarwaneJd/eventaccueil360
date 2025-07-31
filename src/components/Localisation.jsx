const Localisation = () => {
  return (
    <section id="localisation" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Où nous trouver
          </h2>
          <div className="w-16 h-1 bg-red-500 mx-auto"></div>
        </div>

        {/* Google Maps */}
        <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://maps.google.com/maps?q=34.000288,-6.847147&hl=fr&z=16&output=embed"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Event Accueil 360 - 15 Résidence KAYS PLACE, Rabia Al Adaouia, Agdal, Rabat"
            className="w-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Localisation;
