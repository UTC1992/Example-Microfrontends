import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

const Layout = React.lazy(() => import( 'Layout/Layout' ))
const ListCharacters = React.lazy(() => import( 'ListData/ListCharacters' ))
const ListLanguages = React.lazy(() => import( 'Languages/ListLanguages' ))

const App: React.FC = () => {
  const [lang, setLang] = useState<string>( 'ES' )

  const handleSetChange = ( value: string ): void => {
    setLang( value )
  }

  return (
    <>
      <Layout lang={lang}>
        <div className="card-lang">
          <ListLanguages languages={['EN', 'ES']} getValueSelected={handleSetChange} />
        </div>
        <div className="card-list-data">
          <ListCharacters lang={lang} />
        </div>
      </Layout>
    </>
  )
}

const container = document.getElementById( 'app' )
const root = ReactDOM.createRoot( container as HTMLElement )

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
