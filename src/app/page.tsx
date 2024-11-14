import McLovin from '../components/McLovin';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen flex flex-col justify-between">
      <div>
        <h1 className="text-center text-4xl font-bold text-gray-800 mt-8">
        🤓 Porque todos amamos a McLovin 🤓
        </h1>
        <McLovin />
      </div>
      <Footer />
    </main>
  );
}