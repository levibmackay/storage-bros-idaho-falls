import { MotionConfig } from "framer-motion";
import Header from "./components/Header";
import SeamStrip from "./components/SeamStrip";
import Hero from "./sections/Hero";
import Datasheet from "./sections/Datasheet";
import Security from "./sections/Security";
import Access from "./sections/Access";
import LocalArea from "./sections/LocalArea";
import Contact from "./sections/Contact";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-svh bg-charcoal-950 text-paper">
        <Header />
        <main>
          <Hero />
          <SeamStrip />
          <Datasheet />
          <SeamStrip />
          <Security />
          <SeamStrip />
          <Access />
          <SeamStrip />
          <LocalArea />
        </main>
        <SeamStrip />
        <Contact />
      </div>
    </MotionConfig>
  );
}

export default App;
