// import { useState } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="bg-gradient-to-t from-primary to-sub">
      <Navbar />
      <section
        id="home"
        className="container mx-auto pt-28 flex justify-center"
      >
        <div className="container mx-10 my-8" id="cards">
          <div className="flex flex-wrap gap-6">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
