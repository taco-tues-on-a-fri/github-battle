import React from 'react'
import ReactDOM from 'react-dom'
import './index.css' 
import Popular from './components/Popular'
import Battle from './components/Battle'
import { ThemeProvider } from './contexts/theme'


class App extends React.Component {
  constructor() {
    super(props)

    this.state = {
      theme: 'light',
      toggleTheme: () => {
        this.setState(({ theme }) => ({
          theme: theme === 'light' ? 'dark' : 'light'
        }))
      }
    }
  }
  render() {
    return (
      <ThemeProvider value={}>
        <div className='container'>
          <Battle />
          {/* <Popular /> */}
        </div>
      </ThemeProvider>
    )
  }
}

ReactDOM.render(
  <App />,                        
  document.getElementById('app')  
)

