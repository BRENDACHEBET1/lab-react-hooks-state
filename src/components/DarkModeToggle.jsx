import React from 'react'

const DarkModeToggle = ({isDarkMode, handleToggle}) => {
  // TODO: Implement dark mode toggle logic

  return (
    <button onClick={handleToggle}>Toggle Dark Mode {isDarkMode? "Light": "Dark"}</button>
  )
}

export default DarkModeToggle
