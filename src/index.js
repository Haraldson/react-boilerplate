import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from 'app'
import 'normalize.css'
import 'index.scss'

ReactDOM.render(
    (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    ),
    document.getElementById('app')
)

module.hot.accept()
