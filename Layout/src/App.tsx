import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'

import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

const App: React.FC = () => (
  <div className="container">
    <Header title="List characters" />
    <Content>
      <h3>Hello Worlds</h3>
    </Content>
    <Footer title="Power by Developers" />
  </div>
)

const container = document.getElementById( 'app' )
const root = ReactDOM.createRoot( container as HTMLElement )

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
