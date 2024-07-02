// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
  // const [count, setCount] = useState(0);

  return (
    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
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
