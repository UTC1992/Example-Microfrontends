import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import ListIntegrated from './components/ListIntegrated/ListIntegrated'

const App: React.FC = () => (
  <div className="container container--column">
    <ListIntegrated />
  </div>
)

const container = document.getElementById( 'app' )
const root = ReactDOM.createRoot( container as HTMLElement )

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
