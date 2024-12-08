import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Detail from './views/Detail.js/Detail';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import AddUser from './views/AddUser/AddUser';
import Update from './views/Update/Update';


const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>
    },
    {
        path:"/detail/:rollNo",
        element:<Detail/>
    },
    {
        path:"/edit/:rollNo",
        element:<Update/>
    },
    {
        path:"/adduser",
        element:<AddUser/>
    }
]);

root.render(<RouterProvider router={router}/>);
