import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import ListCharacters from './components/ListCharacters/ListCharacters'

const App: React.FC = () => (
  <div className="container container--column">
    <ListCharacters />
  </div>
)

const container = document.getElementById( 'app' )
const root = ReactDOM.createRoot( container as HTMLElement )

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
