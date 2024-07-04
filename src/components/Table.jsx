import PropTypes from "prop-types";
import formatDate from "../util/formatDate";

export default function Table({ posts }) {
  return (
    <div className="w-full pt-36 ">
      <table className="w-full text-sm  text-gray-500 border-collapse">
        <thead className="text-md text-sub3 uppercase bg-sub ">
          <tr>
            <th scope="col" className="px-6 py-3 w-20">
              ID
            </th>
            <th scope="col" className="px-6 py-3 w-1/4">
              Title
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
              <td className="px-6 py-4">{post.title}</td>
              <td className="px-6 py-4">{post.Author.username}</td>
              <td className="px-6 py-4">{formatDate(post.createdAt)}</td>
              <td className="px-6 py-4">{formatDate(post.updatedAt)}</td>
              <td className="px-6 py-4 ">
                <button className="bg-yellow-500 px-6 py-2 rounded-md mr-2 hover:bg-yellow-600">
                  <a href="#" className="font-medium text-gray-600 ">
                    Edit
                  </a>
                </button>
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

Table.propTypes = {
  posts: PropTypes.array,
};
