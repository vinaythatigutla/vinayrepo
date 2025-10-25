const projects = [
  { name: "DIN-Rail Clip", mat: "PETG", use: "IIoT panel mount" },
  { name: "Servo Mount", mat: "CF-PETG", use: "Robotics fixture" },
  { name: "Fan Guard", mat: "ASA", use: "Machine safety" },
  { name: "Pipette Stand", mat: "PLA+", use: "Lab organization" }
];
export default function ProjectsGallery() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-6">Sample Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {projects.map((p) => (
          <div key={p.name} className="bg-white border rounded-lg shadow p-4">
            <div className="h-32 bg-gray-100 flex items-center justify-center text-gray-400">{p.name}</div>
            <p className="mt-2 text-sm text-gray-600">{p.mat} • {p.use}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
