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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.8697767589777!2d-6.838838!3d33.999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDU5JzU2LjQiTiA2wrA1MCcxOS44Ilc!5e0!3m2!1sen!2sma!4v1234567890"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Event Accueil 360 Location"
            className="w-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Localisation;
