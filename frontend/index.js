import React from 'react'
import { render } from 'react-dom'
// import App from './frontend/components/App.js'
import './styles/reset.css'
import './styles/styles.css'

render(
  <React.StrictMode>
    <h1>Todo App AJAX</h1>
    {/* <App /> */}
  </React.StrictMode>
  , document.getElementById('root')
)
