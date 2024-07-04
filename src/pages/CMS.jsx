import { useEffect, useState } from "react";
import Table from "../components/Table";
import axios from "../util/axios";

export default function ContentManagement() {
  const [postData, setPostData] = useState([]);
  //   const []

  useEffect(() => {
    async function fetchData() {
      try {
        await axios.get();
      } catch (err) {
        console.error(err);
      }
    }
  });

  return (
    <section id="cms">
      <div className="container mx-auto my-auto h-screen">
        <Table />
      </div>
    </section>
  );
}
