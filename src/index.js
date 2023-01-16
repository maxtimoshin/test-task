import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserPostsPage from './pages/UserPostsPage';
import { store } from './redux/store'
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/user/:id/posts",
    element: <UserPostsPage />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    {/* <App /> */}
    <RouterProvider router={router} />
  </Provider>
);

