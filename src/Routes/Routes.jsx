import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Tickets from "../Pages/Tickets/Tickets";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import BandDtls from "../Pages/BandDtls/BandDtls";
import PrivateRoutes from "./PrivateRoutes";
import PrivateRoutesTow from "./PrivateRoutesTow";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
        path:"/",
        element:<Home></Home>,
        loader:()=> fetch('/banddata.json')
      },
      {
        path:"/ticktes",
        element:<PrivateRoutesTow><Tickets></Tickets></PrivateRoutesTow>
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
      },
      {
        path:"/bandDtls/:id",
        element:<PrivateRoutes><BandDtls></BandDtls></PrivateRoutes>,
        loader:()=> fetch('/banddata.json')
      }
    ]
    },
  ]);


export default router;