import React from 'react'
import Navbar from './Navbar.js'

export default class App extends React.Component {

  render() {
    return (
      <div>

       <nav className='navbar navbar-default navbar-inverse'>
       <Navbar />
       </nav>

      <div className='container'>
        Hello App!!


        {this.props.children}
      </div>
      </div>
    );
  }
}
