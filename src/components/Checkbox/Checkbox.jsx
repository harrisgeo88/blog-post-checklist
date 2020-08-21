import React from 'react'

export const Checkbox = ({ title }) => {
  return (
    <label className="checkbox">
      <input type="checkbox" />
      <span className="checkbox-title" data-testid="checkbox">
        {title}
      </span>
    </label>
  )
}
