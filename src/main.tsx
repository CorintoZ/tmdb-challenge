import './index.css';
import 'font-awesome/css/font-awesome.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import App from './App';
import PopularList, { rootLoader } from './components/PopularList';
import ShowDetails from './components/ShowDetails';
import { ShowProvider } from './contexts/show.context';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />} path="/">
      <Route element={<PopularList />} loader={rootLoader} path="/" />
      <Route element={<ShowDetails />} path="show/:showId" />
    </Route>,
  ),
);

ReactDOM.render(
  <React.StrictMode>
    <ShowProvider>
      <RouterProvider router={router} />
    </ShowProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
