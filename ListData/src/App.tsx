import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import BoxButtons from './components/BoxButtons/BoxButtons'
import Button from './components/Button/Button'

const App: React.FC = () => (
  <div className="container">
    <BoxButtons>
      <Button>
        Rick and Morty
      </Button>
      <Button>
        Harry Potter
      </Button>
    </BoxButtons>
  </div>
)

const container = document.getElementById( 'app' )
const root = ReactDOM.createRoot( container as HTMLElement )

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
