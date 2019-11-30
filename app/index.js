import React from 'react'
import ReactDOM from 'react-dom'
import './index.css' // This works because of the style-loader
import Popular from './components/popular'

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Popular />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,                        // React Element,
  document.getElementById('app')  // Where to render the Element to
)

