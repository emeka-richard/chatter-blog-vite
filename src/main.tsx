import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import RouteComponent from './routes/routes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouteComponent />
  </React.StrictMode>,
)


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import { RouterProvider } from "react-router-dom";
// import router from './routes/routes';
// // import router from './routes/route-Config';


// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );