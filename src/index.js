import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";
import "./index.css"

import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./context";

function Index(){
    return (<React.StrictMode>
      <BrowserRouter>
      <AppProvider>
       <App />
      </AppProvider>
      </BrowserRouter>
    </React.StrictMode>
)}



const root =ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />)