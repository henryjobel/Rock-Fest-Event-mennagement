import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Tickets from "../Pages/Tickets/Tickets";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[{
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/ticktes",
        element:<Tickets></Tickets>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/about",
        element:<About></About>
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      }
    ]
    },
  ]);


export default router;