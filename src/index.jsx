import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import Join from './Join.jsx';
import Chat from './Chat.jsx';

const router = createBrowserRouter([
  {path : "/", element : <App />},
  {path : "/join", element : <Join />},
  {path : "/chat", element : <Chat />},
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  
    <RouterProvider router={router}/>
  
);


