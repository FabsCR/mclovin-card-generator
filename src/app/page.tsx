import McLovin from "../components/McLovin";
import Footer from "../components/Footer";
import ThemeToggle from "../components/ThemeToggle";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-between">
      <header className="flex justify-end p-4">
        <ThemeToggle />
      </header>
      <McLovin />
      <Footer />
    </main>
  );
}