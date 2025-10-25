import '../../styles/globals.css';
import QuoteForm from '../../components/QuoteForm';
import Footer from '../../components/Footer';
export default function Page() {
  return (
    <main className="max-w-7xl mx-auto px-6">
      <QuoteForm />
      <Footer />
    </main>
  );
}
