import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './Components/AddCoffee';
import UpdateCoffee from './Components/UpdateCoffee';
import ViewCoffee from './Components/ViewCoffee';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader:() => fetch('https://coffee-store-server-rh95exc7y-hasantalukder1234.vercel.app/coffee')
  },
  {
    path:'/addCoffee',
    element:<UpdateCoffee></UpdateCoffee>
  },{
    path:'/updateCoffee/:id',
    element:<AddCoffee></AddCoffee>,
    loader:({params}) => fetch(`https://coffee-store-server-rh95exc7y-hasantalukder1234.vercel.app/coffee/${params.id}`)
  },
  {
    path:'/viewCoffee/:id',
    element:<ViewCoffee></ViewCoffee>,
    loader:({params})=> fetch(`https://coffee-store-server-rh95exc7y-hasantalukder1234.vercel.app/coffee/${params.id}`)
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
