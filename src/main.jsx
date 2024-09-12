import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App.jsx"
import './css/index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MovieDetail } from './page/MovieDetail.jsx';
import { AppLayout } from './page/AppLayout.jsx'
import { AllMovies } from './page/AllMovies.jsx';

function Main() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index path='/' element={<App />} />
            <Route path="/movie/" element={<AllMovies />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
