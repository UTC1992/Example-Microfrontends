import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import ListLanguages from './components/ListLanguages/ListLanguages'

const App: React.FC = () => (
  <div className="container">
    <h1>Languages</h1>
    <ListLanguages languages={['ES', 'EN']} />
  </div>
)

const container = document.getElementById( 'app' )
const root = ReactDOM.createRoot( container as HTMLElement )

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
