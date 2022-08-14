import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Analytics from "./component/Analytics";
import Newsletter from "./component/Newsletter";
import Cards from "./component/Cards";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
    </div>
  );
}

export default App;
