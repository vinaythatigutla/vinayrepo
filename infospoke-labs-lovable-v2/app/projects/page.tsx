import '../../styles/globals.css';
import ProjectsGallery from '../../components/ProjectsGallery';
import Footer from '../../components/Footer';
export default function Page() {
  return (
    <main className="max-w-7xl mx-auto px-6">
      <ProjectsGallery />
      <Footer />
    </main>
  );
}
