import React from 'react'
import { render } from '@testing-library/react'
import { Checkbox } from './Checkbox'

test('Checkbox matches snapshot', () => {
  const { container } = render(<Checkbox title="i like cookies" />)
  expect(container.firstChild).toMatchSnapshot()
})
