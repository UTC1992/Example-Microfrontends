import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'

import Layout from './components/Layout/Layout'

const App: React.FC = () => (
  <Layout>
    <h3>Hello Worlds</h3>
  </Layout>
)

const container = document.getElementById( 'app' )
const root = ReactDOM.createRoot( container as HTMLElement )

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
