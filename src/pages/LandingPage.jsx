import React from "react";
import Home from "../components/Home";
import About from "../components/About";
import Events from "../components/Events";
import Gallery from "../components/Gallery";
import Final from "../components/Final";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <main className="overflow-hidden">
      <div className="relative">
        <section>
          <Home />
        </section>
        <section>
          <About />
        </section>
        <section>
          <Events />
        </section>
        <section>
          <Gallery />
        </section>
        <section>
          <Final />
        </section>
        <section>
          <Footer />
        </section>
      </div>
    </main>
  );
}
