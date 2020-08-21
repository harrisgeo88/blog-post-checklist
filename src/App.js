import React from 'react'
import { Checkbox } from './components/Checkbox'
import Emoji from 'a11y-react-emoji'
import lang from './lang/en-gb.json'
import GithubCorner from 'react-github-corner'
import { SEO } from './components/SEO'
import './App.css'
import 'react-github-button/assets/style.css'

const GitHubButton = require('react-github-button')

const App = () => {
  const aProps = {
    target: '_blank',
    rel: 'noopener noreferrer',
  }
  const { checklist, tips, tipsList, title, quote, list } = lang
  return (
    <div className="App">
      <SEO title={title} description={quote} />
      <header className="banner">
        <div className="banner-container">
          <GithubCorner
            href="https://github.com/harrisgeo88/blog-post-checklist/"
            bannerColor="#fafffd"
            octoColor="#3c91e6"
            {...aProps}
          />
          <h1 className="header-1">
            <Emoji symbol="✍🏻" label="writting hand" /> {title}
          </h1>
          <p id="quote">{quote}</p>
          <div id="github-badges">
            <GitHubButton
              type="stargazers"
              size="large"
              namespace="harrisgeo88"
              repo="blog-post-checklist"
            />
            <GitHubButton
              className="hallo"
              size="large"
              type="forks"
              namespace="harrisgeo88"
              repo="blog-post-checklist"
            />
          </div>
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
        <a id="created-by" href="https://harrisgeo.me" {...aProps}>
          Created by Harris Geo
        </a>
      </footer>
    </div>
  )
}

export default App
