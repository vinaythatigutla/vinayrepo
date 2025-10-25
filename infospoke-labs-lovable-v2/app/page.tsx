import '../styles/globals.css';
import Hero from '../components/Hero';
import About from '../components/About';
import FocusAreas from '../components/FocusAreas';
import ProjectsGallery from '../components/ProjectsGallery';
import Services from '../components/Services';
import Footer from '../components/Footer';
export default function Page() {
  return (
    <main className="max-w-7xl mx-auto px-6">
      <Hero />
      <About />
      <FocusAreas />
      <ProjectsGallery />
      <Services />
      <Footer />
    </main>
  );
}
