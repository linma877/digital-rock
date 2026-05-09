
export default function DigitalRockManchester() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#12091f] via-[#1a1033] to-black text-white font-sans">

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-32 overflow-hidden">

        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.25),transparent_60%)]" />

        <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-yellow-400 drop-shadow-lg">
          Digital Rock @ Manchester
          
        </h1>
        <h1 className="text-6xl md:text-5xl font-bold tracking-tight text-gray-300 drop-shadow-lg">
          
          Dr. Lin Ma's Research lab
        </h1>

        <p className="mt-6 max-w-3xl text-xl md:text-2xl text-gray-300 leading-relaxed">
          Multiscale and dynamic Imaging, High temperature, High pressure Experiments, Reactive Transport and Subsurface Energy Systems
        </p>

        <div className="mt-10 flex gap-4 flex-wrap justify-center">

          <button className="px-6 py-3 rounded-2xl bg-yellow-400 text-black font-semibold shadow-xl hover:scale-105 transition-transform">
            Research Theme
          </button>

           <button className="px-6 py-3 rounded-2xl bg-yellow-400 text-black font-semibold shadow-xl hover:scale-105 transition-transform">
            Team
          </button>

            <button className="px-6 py-3 rounded-2xl bg-yellow-400 text-black font-semibold shadow-xl hover:scale-105 transition-transform">
            Facilities
          </button>

          <button className="px-6 py-3 rounded-2xl border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all">
            Publications
          </button>

          <button className="px-6 py-3 rounded-2xl border border-gray-500 text-gray-300 hover:border-white hover:text-white transition-all">
            News
          </button>

          <button className="px-6 py-3 rounded-2xl border border-gray-500 text-gray-300 hover:border-white hover:text-white transition-all">
            Join Us
          </button>

        </div>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h2 className="text-4xl font-bold text-yellow-400 mb-6">
            About the Group
          </h2>

          <p className="text-gray-300 leading-8 text-lg">
            Digital Rock @ Manchester develops advanced imaging and data-driven approaches to understand reactive porous media systems across multiple scales.

            Our research focuses on subsurface energy systems including natural hydrogen, underground hydrogen storage, carbon storage, geothermal energy and reactive transport in complex geological materials.
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-2xl border border-purple-900">

          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop"
            alt="Digital Rock"
            className="w-full h-full object-cover"
          />

        </div>
      </section>

      {/* Research Themes */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-5xl font-bold text-center text-yellow-400 mb-16">
          Research Themes
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {[
            
            {
              title: "Digital Rock Physics",
              desc: "Pore-scale imaging, flow modelling and multiscale characterisation.",
            },

            {
              title: "Advanced and operandoImaging",
              desc: "Synchrotron imaging, operando CT and 5D characterisation.",
            },
                        {
              title: "Underground Energy Storage",
              desc: "Hydrogen, CO₂, CAES and geothermal storage systems.",
            },
            {
              title: "Conventional and Unconventional hydrocarbon energy",
              desc: "Hydrogen, CO₂, CAES and geothermal storage systems.",
            },
            {
              title: "Geothermal Energy",
              desc: "Hydrogen, CO₂, CAES and geothermal storage systems.",
            },
                        {
              title: "Nuclear Waste Disposal",
              desc: "Hydrogen, CO₂, CAES and geothermal storage systems.",
            },
          ].map((item, index) => (

            <div
              key={index}
              className="bg-[#1b1233]/80 backdrop-blur-lg border border-purple-800 rounded-3xl p-8 hover:-translate-y-2 transition-transform shadow-xl"
            >

              <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
                {item.title}
              </h3>

              <p className="text-gray-300 leading-7">
                {item.desc}
              </p>

            </div>
          ))}

        </div>
      </section>

      {/* Facilities */}
      <section className="bg-[#140d26] py-24 px-6">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-5xl font-bold text-yellow-400 text-center mb-16">
            Facilities & Platforms
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "X-ray Computed Tomography",
              "Synchrotron Imaging",
              "High-pressure Reactive Flow Systems",
              "Operando Imaging Platforms",
              "Digital Rock Workflows",
              "AI-assisted Image Analysis",
            ].map((facility, index) => (

              <div
                key={index}
                className="rounded-2xl border border-purple-700 p-6 bg-black/30 text-center hover:border-yellow-400 transition-colors"
              >

                <p className="text-lg text-gray-200">
                  {facility}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* News */}
      <section className="max-w-5xl mx-auto px-6 py-24">

        <h2 className="text-5xl font-bold text-yellow-400 text-center mb-16">
          Latest News
        </h2>

        <div className="space-y-8">

          {[
            "New synchrotron beamtime awarded for operando hydrogen storage imaging.",
            "New publication on reactive transport in porous media accepted.",
            "Digital Rock @ Manchester launched.",
          ].map((news, index) => (

            <div
              key={index}
              className="border-l-4 border-yellow-400 pl-6 py-2 text-gray-300 text-lg"
            >

              {news}

            </div>
          ))}

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-900 py-10 text-center text-gray-500">

        <p>
          Digital Rock @ Manchester · The University of Manchester
        </p>

      </footer>
    </div>
  );
}