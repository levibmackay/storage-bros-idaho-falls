import Header from "./components/Header";
import Hero from "./sections/Hero";
import Datasheet from "./sections/Datasheet";
import Security from "./sections/Security";
import Access from "./sections/Access";
import LocalArea from "./sections/LocalArea";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="min-h-svh bg-charcoal-950 text-paper">
      <Header />
      <main>
        <Hero />
        <Datasheet />
        <Security />
        <Access />
        <LocalArea />
      </main>
      <Contact />
    </div>
  );
}

export default App;
