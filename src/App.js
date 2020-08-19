import React from 'react'
import { Checkbox } from './components/Checkbox'
import Emoji from 'a11y-react-emoji'
import lang from './lang/en-gb.json'
import './App.css'

const App = () => {
  const { checklist, tips, tipsList, title, quote, list } = lang
  return (
    <div className="App">
      <header className="banner">
        <div className="banner-container">
          <h1 className="header-1">
            <Emoji symbol="✍🏻" label="writting hand" /> {title}
          </h1>
          <p id="quote">{quote}</p>
        </div>
      </header>
      <div className="main-body">
        <h2 className="header-2">{list}</h2>
        <div className="checklist">
          {checklist.map((checkitem, i) => (
            <Checkbox title={checkitem} key={i} />
          ))}
        </div>
        <h2 className="header-2">{tips}</h2>
        <ul>
          {tipsList.map(({ href, message }, i) => (
            <li className="list-item" key={i}>
              <a href={href} target="_blank" rel="noopener noreferrer">
                {message}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <footer>
        <a
          id="created-by"
          href="https://harrisgeo.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by Harris Geo
        </a>
      </footer>
    </div>
  )
}

export default App
