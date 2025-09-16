import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Collections } from "./components/Collections";
import { Brands } from "./components/Brands";
import { RunwayTrends } from "./components/RunwayTrends";
import { DigitalCloset } from "./components/DigitalCloset";
import { FashionEvents } from "./components/FashionEvents";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Collections />
        <Brands />
        <RunwayTrends />
        <DigitalCloset />
        <FashionEvents />
      </main>
      <Footer />
    </div>
  );
}