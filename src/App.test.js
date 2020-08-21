import React from 'react'
import { render } from '@testing-library/react'
import lang from './lang/en-gb.json'
import App from './App'

test('renders title', () => {
  const { getByText } = render(<App />)
  const linkElement = getByText(lang.title)
  expect(linkElement).toBeInTheDocument()
})
