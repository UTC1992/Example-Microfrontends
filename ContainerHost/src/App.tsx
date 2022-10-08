import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const Header = React.lazy(() => import("Layout/Header"));
const Content = React.lazy(() => import("Layout/Content"));
const Footer = React.lazy(() => import("Layout/Footer"));
const ListCharacters = React.lazy(() => import("ListData/ListCharacters"));
const ListLanguages = React.lazy(() => import("Languages/ListLanguages"));


const App = () => (
  <div className="container">
    <Header title="Super challenge"/>
    <div className="card-lang">
    <ListLanguages languages={["EN", "ES"]}/>
    </div>
    <Content>
      <ListCharacters />
    </Content>
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

