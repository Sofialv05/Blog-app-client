import PropTypes from "prop-types";
import formatDate from "../util/formatDate";
import { Link } from "react-router-dom";
import countPosts from "../util/countPosts";

export function Table({ posts, categories, onDelete }) {
  // const navigate = useNavigate();

  return (
    <div className="w-full py-20 ">
      <table className="w-full text-sm  text-gray-500 border-collapse">
        <thead className="text-md text-sub3 uppercase bg-primary">
          <tr>
            <th scope="col" className="px-6 py-3 w-20"></th>
            <th scope="col" className="px-6 py-3 w-28">
              Image
            </th>
            <th scope="col" className="px-6 py-3 w-1/4">
              Title
            </th>
            <th scope="col" className="px-6 py-3 w-52">
              Category
            </th>
            <th scope="col" className="px-6 py-3 w-40">
              Author
            </th>
            <th scope="col" className="px-6 py-3 w-32">
              Created Date
            </th>
            <th scope="col" className="px-6 py-3 w-32">
              Last Updated
            </th>
            <th scope="col" className="px-6 py-3 w-1/4">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => (
            <tr
              key={index}
              className="bg-white border-b  hover:bg-gray-50 text-center"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                {++index}
              </th>
              <td className="px-6 py-4">
                <img src={post.imgUrl} alt={post.title} />
              </td>
              <td className="px-6 py-4">{post.title}</td>
              <td className="px-6 py-4">
                {categories.map((category) =>
                  category.id == post.CategoryId ? category.name : ""
                )}
              </td>
              <td className="px-6 py-4">{post.Author.username}</td>
              <td className="px-6 py-4">{formatDate(post.createdAt)}</td>
              <td className="px-6 py-4">{formatDate(post.updatedAt)}</td>
              <td className="px-6 py-4 items-center space-x-2">
                <Link
                  to={"/edit-image/" + post.id}
                  className="font-medium text-gray-600"
                >
                  <button className="bg-cyan-500 px-7 py-2 rounded-md hover:bg-cyan-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20px"
                      viewBox="0 0 24 24"
                      width="20px"
                      fill="#ffffff"
                      className="inline-block"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path d="M18 20H4V6h9V4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-9h-2v9zm-7.79-3.17l-1.96-2.36L5.5 18h11l-3.54-4.71zM20 4V1h-2v3h-3c.01.01 0 2 0 2h3v2.99c.01.01 2 0 2 0V6h3V4h-3z" />
                    </svg>
                  </button>
                </Link>
                <span className="text-2xl">||</span>
                <Link
                  to={"/edit-post/" + post.id}
                  className="font-medium text-gray-600"
                >
                  <button className="bg-yellow-500 px-6 py-2 rounded-md hover:bg-yellow-600">
                    Edit
                  </button>
                </Link>
                <span className="text-2xl">||</span>
                <button
                  className="font-medium text-white bg-red-600 px-4 py-2 rounded-md hover:bg-red-700"
                  onClick={() => onDelete(post.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

Table.propTypes = {
  posts: PropTypes.array,
  categories: PropTypes.array,
  onDelete: PropTypes.func,
};

export function CategoryTable({ categories, posts }) {
  return (
    <div className="w-full py-20 flex justify-center">
      <table className="w-auto text-sm self-center text-gray-500 border-collapse">
        <thead className=" text-md text-sub3 uppercase bg-primary ">
          <tr>
            <th scope="col" className="px-6 py-3 w-20"></th>
            <th scope="col" className="px-6 py-3 w-1/3">
              Category Name
            </th>
            <th scope="col" className="px-6 py-3 w-1/4">
              Created Date
            </th>
            <th scope="col" className="px-6 py-3 w-1/4">
              Total Posts
            </th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr
              key={index}
              className="bg-white border-b  hover:bg-gray-50 text-center"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                {++index}
              </th>
              <td className="px-6 py-4">{category.name}</td>
              <td className="px-6 py-4">{formatDate(category.createdAt)}</td>
              <td className="px-6 py-4">{countPosts(posts, category.id)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

CategoryTable.propTypes = {
  categories: PropTypes.array,
  posts: PropTypes.array,
};
