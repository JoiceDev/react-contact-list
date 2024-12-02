import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalStyles from './GlobalStyles'
import { store } from './store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
        <GlobalStyles />
        <App />
        </Provider>
    </React.StrictMode>
)