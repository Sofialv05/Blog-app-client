import { useState, useEffect } from "react";
import Card from "../components/Card";
import axios from "axios";

export default function Home() {
  useEffect(() => {
    axios({
      method: "GET",
      url: "https://gc.sofalvsy-web.site/pub/posts",
    })
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  });
  return (
    <div className="bg-gradient-to-t from-primary to-sub">
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
