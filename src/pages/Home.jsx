import Card from "../components/Card";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="bg-gradient-to-t from-primary to-sub">
      <Navbar />
      <section
        id="home"
        className="container mx-auto pt-28 flex justify-center"
      >
        <div className="container mx-10 my-8" id="cards">
          <div className="flex flex-col justify-center gap-6">
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
