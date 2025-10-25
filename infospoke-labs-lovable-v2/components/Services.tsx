const services = [
  { title: "Rapid 3D Printing", desc: "Fast, high-quality functional prototypes." },
  { title: "AI-Aided Design", desc: "Smart geometry optimization." },
  { title: "Low-Volume Production", desc: "Batch runs up to 100 parts." },
  { title: "CAD-to-Print Consulting", desc: "Design for additive manufacturing." }
];
export default function Services() {
  return (
    <section className="py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-6">Services</h2>
      <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {services.map((s) => (
          <div key={s.title} className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-lg mb-1">{s.title}</h3>
            <p className="text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
