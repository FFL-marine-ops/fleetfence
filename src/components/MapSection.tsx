export default function MapSection() {
  return (
    <div className="relative z-20" style={{ marginTop: '-45px' }} data-aos="fade-up">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white border border-brand-lightgrey/30 p-4 pt-16 rounded-2xl shadow-2xl">
          <div className="w-full h-[400px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps?q=RIVTAF+Golf+Estate+Trans+Amadi+Industrial+Estate,+Port+Harcourt,+Rivers+state&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="FleetFence Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
} 