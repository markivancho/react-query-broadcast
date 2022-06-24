import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Second from './Second';
import Third from './Third';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import {
  QueryClient,
  QueryClientProvider
} from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import { broadcastQueryClient } from 'react-query/broadcastQueryClient-experimental';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false
    }
  }
});

broadcastQueryClient({
  queryClient
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={queryClient}>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/second" element={<Second />} />
          <Route path="/third" element={<Third />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools />
  </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
