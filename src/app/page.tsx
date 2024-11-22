import McLovinCard from "../components/McLovinCard";
import Footer from "../components/Footer";
import ThemeToggle from "../components/ThemeToggle";
import McLovin from "../components/McLovin";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-between bg-gray-100 dark:bg-gray-900 animate-fade-in">
      <header className="flex flex-col items-center p-4 animate-slide-up">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 text-center mb-4">
          McLovin Card Generator
        </h1>
        <ThemeToggle />
      </header>
      <div className="flex justify-center items-center p-4 animate-slide-up delay-200">
        <McLovinCard />
      </div>
      <div className="animate-slide-up delay-400">
        <McLovin />
      </div>
      <Footer />
    </main>
  );
}