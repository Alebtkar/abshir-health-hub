const MapSection = () => {
  return (
    <section id="map" className="py-16 gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            موقعنا
          </h2>
          <p className="text-muted-foreground">
            ليبيا
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-card">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3355.9619888857!2d13.1913!3d32.8872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13a892e1d09f2f7b%3A0x4b5b2c5e8a5e5a5a!2sTripoli%2C%20Libya!5e0!3m2!1sen!2s!4v1703000000000!5m2!1sen!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="موقع شركة ابشر"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default MapSection;
