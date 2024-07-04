import PropTypes from "prop-types";
import formatDate from "../util/formatDate";
import { Link } from "react-router-dom";

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

export function UserTable({ users }) {
  return (
    <div className="w-full py-20 ">
      <table className="w-full text-sm  text-gray-500 border-collapse">
        <thead className="text-md text-sub3 uppercase bg-primary ">
          <tr>
            <th scope="col" className="px-6 py-3 w-20">
              ID
            </th>
            <th scope="col" className="px-6 py-3 w-20">
              Username
            </th>
            <th scope="col" className="px-6 py-3 w-1/4">
              Email
            </th>
            <th scope="col" className="px-6 py-3 w-40">
              Phone Number
            </th>
            <th scope="col" className="px-6 py-3 w-32">
              Address
            </th>
            <th scope="col" className="px-6 py-3 w-1/5">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
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
              <td className="px-6 py-4">{user.username}</td>
              <td className="px-6 py-4">{user.email}</td>
              <td className="px-6 py-4">{user.phoneNumber}</td>
              <td className="px-6 py-4">{user.address}</td>
              <td className="px-6 py-4 ">
                <button className="bg-red-600 px-4 py-2 rounded-md ml-2 hover:bg-red-700">
                  <a href="#" className="font-medium text-white ">
                    Delete
                  </a>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

UserTable.propTypes = {
  users: PropTypes.array,
};
