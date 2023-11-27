import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import './App.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import Root from './routes/root';
import Home from './routes/home';
import About from './routes/about';
import Contact from './routes/contact';
import ErrorPage from './routes/error-page';
import Posts from './routes/posts';
import Post, {loader as postLoader } from './routes/post';
import PostIndex, { loader as postsLoader } from './routes/postindex';
import Todo, { loader as todoLoader, action as todoAction, } from './routes/todo';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'todo',
        element: <Todo />,
        loader: todoLoader,
        action: todoAction,
      },
      {
        path: 'posts',
        element: <Posts />,
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <PostIndex />,
            loader: postsLoader,
          },
          {
            path: ':postId',
            element: <Post />,
            loader: postLoader,
            errorElement: <ErrorPage />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// あの記事の、src/main.jsxはここです
