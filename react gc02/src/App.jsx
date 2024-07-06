import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className=" font-montserrat">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
