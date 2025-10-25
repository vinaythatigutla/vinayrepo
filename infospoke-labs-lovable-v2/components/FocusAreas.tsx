const areas = [
  { title: "Industrial Automation", desc: "Custom jigs, fixtures, and assembly tools." },
  { title: "Machine Maintenance", desc: "Low-volume spares and replacement parts." },
  { title: "Robotics & IIoT", desc: "Sensor housings and smart enclosures." },
  { title: "Medical / Lab Prototyping", desc: "Lab accessories and educational models." }
];
export default function FocusAreas() {
  return (
    <section id="focus" className="py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Focus Areas</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {areas.map((a) => (
            <div key={a.title} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-2">{a.title}</h3>
              <p className="text-gray-600">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
