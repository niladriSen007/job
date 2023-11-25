import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PostJob from "./pages/PostJob";
import SingleJobPage from "./pages/singleJobPage";


const Layout = () => (
  <div>
    <Navbar />
    <div >
      <Outlet />
    </div>
    <Footer />
  </div>
);

const App = () => {
  {
    /*  */
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/postJob",
          element: <PostJob />,
        },
        {
          path: "/job/:id",
          element: <SingleJobPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
