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
            <th scope="col" className="px-6 py-3 w-20">
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
            <th scope="col" className="px-6 py-3 w-1/5">
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
              <td className="px-6 py-4 ">
                <Link
                  to={"/edit-post/" + post.id}
                  className="font-medium text-gray-600 "
                >
                  <button className="bg-yellow-500 px-6 py-2 rounded-md mr-2 hover:bg-yellow-600">
                    Edit
                  </button>
                </Link>
                <span className="text-2xl">||</span>

                <button
                  className="font-medium text-white bg-red-600 px-4 py-2 rounded-md ml-2 hover:bg-red-700"
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
