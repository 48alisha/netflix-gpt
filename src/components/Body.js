import React from 'react';
import Browser from "./Browser";
import Login from "./Login";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const Body = () => {
    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browser",
            element:<Browser/>
        },
    ]);

  return (
    <div>
        {/* I am passing appRouter as a prop to RouteProvider Component */}
        <RouterProvider router={appRouter}/> 
    </div>
  );
};

export default Body