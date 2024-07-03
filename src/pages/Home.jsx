import { useState, useEffect } from "react";
import Card from "../components/Card";
import axios from "axios";

export default function Home() {
  const [titlePost, setTitlePost] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://gc.sofalvsy-web.site/pub/posts",
    })
      .then(({ data }) => {
        console.log(data);
        setTitlePost(data);
      })
      .catch((err) => {
        console.log("Error fetching data:", err);
      });
  }, []);

  return (
    <div className="bg-gradient-to-t from-primary to-sub">
      <section
        id="home"
        className="container mx-auto pt-28 flex justify-center"
      >
        <div className="container mx-10 my-8" id="cards">
          <div className="flex flex-col justify-center gap-6">
            {titlePost.length > 0 ? (
              <Card titles={titlePost} />
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
