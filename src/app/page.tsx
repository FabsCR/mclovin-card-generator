import McLovin from "../components/McLovin";
import Footer from "../components/Footer";
import ThemeToggle from "../components/ThemeToggle";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-between">
      <header className="flex justify-end p-4">
        <ThemeToggle />
      </header>

      <div className="flex justify-center items-center p-4">
        <div className="bg-white text-gray-800 dark:bg-gray-800 dark:text-white rounded-lg shadow-lg w-full max-w-4xl p-4 animate-zoom mx-4">
          <h1 className="text-2xl font-extrabold mb-2 text-center tracking-wider text-blue-600 dark:text-blue-300">Work in Progress 🚀</h1>
          <p className="text-lg text-center font-semibold text-gray-700 dark:text-gray-300">
            We&apos;re cooking up a <span className="italic">&quot;McLovin-style Card Generator&quot;</span> so you can make your own cards.
          </p>
        </div>
      </div>

      <McLovin />
      <Footer />
    </main>
  );
}