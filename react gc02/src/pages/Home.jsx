import { useState, useEffect } from "react";
import Card from "../components/Card";
import axios from "../util/axios";
import { toast } from "react-toastify";
import PaginationButton from "../components/PaginationButton";
import Search from "../components/Search";
import PageSize from "../components/PageSize";
import Sort from "../components/Sort";
import CategoryFilter from "../components/CategoryFilter";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  //params
  const [search, setSearch] = useState("");
  const [pageSize, setPageSize] = useState(4);
  const [sort, setSort] = useState("title");
  const [selectedCategory, setSelectedCategory] = useState("");

  //set pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationOption, setPaginationOption] = useState({
    totalData: 0,
    totalPage: 1,
    dataPerPage: 0,
  });

  const fetchPosts = async () => {
    try {
      const { data } = await axios({
        method: "GET",
        url: "/pub/posts",
        params: {
          filter: selectedCategory,
          page: {
            size: pageSize,
            number: currentPage,
          },
          sort: sort,
          keyword: search,
        },
      });
      let { totalData, totalPage, dataPerPage } = data;
      setPosts(data.data);
      setPaginationOption(() => ({ totalData, totalPage, dataPerPage }));
      setLoading(false);
    } catch (err) {
      console.err(err);
      toast.error(err.response?.data.message || err.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, [selectedCategory, pageSize, currentPage, sort, search]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        let { data } = await axios({
          method: "GET",
          url: "/pub/categories",
        });
        setCategories(data);
      } catch (err) {
        console.error(err);
        toast.error(err.response?.data.message || err.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    };
    fetchCategories();
  }, []);

  const submitSearch = () => {
    if (currentPage !== 1) {
      setCurrentPage(1);
    } else {
      fetchPosts();
    }
  };

  return (
    <section id="home" className="container mx-auto pt-20 flex justify-center">
      <div className="container mx-6 my-8" id="cards">
        <div className="grid grid-cols-11 gap-4 items-center mb-10 bg-primary rounded-md py-4 px-8 shadow-md fixed top-30 right-36 left-36 shadow-gray-600 z-10">
          <div className="col-span-2">
            <PageSize pageSize={pageSize} setPageSize={setPageSize} />
          </div>
          <div className="col-span-3">
            <CategoryFilter
              setSelectedCategory={setSelectedCategory}
              categories={categories}
            />
          </div>
          <div className="col-span-1">
            <Sort setSort={setSort} />
          </div>
          <div className="col-span-5 ml-7 mr-5">
            <Search
              search={search}
              setSearch={setSearch}
              submitSearch={submitSearch}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center gap-6 mt-28">
          {loading ? (
            <p>Loading...</p>
          ) : (
            posts.map((post, index) => <Card post={post} key={index} />)
          )}
        </div>
        <div className="w-full my-16"></div>
        <PaginationButton
          paginationOption={paginationOption}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </section>
  );
}
