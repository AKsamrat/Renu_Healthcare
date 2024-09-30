import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./Components/About/About";
import Donate from "./Components/Donate/Donate";
import Gallery from "./Components/Gallery/Gallery";
import Events from "./Components/Events/Events";
import Contact from "./Components/Contact/Contact";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import Signup from "./Components/Login/Signup";
import Error from "./Components/Error/Error";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    
    path : "/",
    element:<App/>,
    children : [
      {
        path:"",
        element:<Home/>
      },
      {
        path:"About",
        element:<About/>
      },
      {
        path:"Donate",
        element:<Donate/>
      },{
        path:"Gallery",
        element:<Gallery/>
      },{
        path:"Events",
        element:<Events/>
      },{
        path:"Contact",
        element:<Contact/>
      },{
        path:"Login",
        element:<Login/>
      },
      {
        path:"Signup",
        element:<Signup/>
      },{
        path:"*",
        element:<Error/>
      }
    ]
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
