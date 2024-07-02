// import { useState } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <body className="bg-gradient-to-t from-primary to-sub h-screen">
      <Navbar />
      <section id="home" className="container mx-auto my-8 flex justify-center">
        <div className="container mx-10 my-8" id="cards">
          <div className="flex flex-wrap gap-6">
            <Card />
            <Card />
          </div>
        </div>
      </section>
    </body>
  );
}

export default App;
