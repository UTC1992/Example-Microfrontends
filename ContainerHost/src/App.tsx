import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const Footer = React.lazy(() => import("Layout/Footer"));

const App = () => (
  <div className="container">
    <Footer title="Super challenge"/>
  </div>
);

const container = document.getElementById( 'app' )
const root = ReactDOM.createRoot( container as HTMLElement )

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

