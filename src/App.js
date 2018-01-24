import React, { Component } from 'react';
import { connect } from 'react-redux'
import { showCat } from './actions'
import './App.css';

class App extends Component {

  componentWillMount(){
    this.props.showCat()
  }

  renderCatList() {
    return this.props.cat.map((cat) => {
      return (
        <li key={cat.id}>{cat}</li>
        )
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
            <img src="https://assets.chucknorris.host/img/chucknorris_logo_coloured_small.png" className="App-logo" alt="logo" />
            <h1 className="App-title">Chuck Norris Jokes </h1>
        </header>
        <h2>Categories</h2>
        <ul>
          { this.renderCatList() }
        </ul>
        <footer className="App-footer">
        </footer>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    cat: state.cat.list
  }
}

export default connect(mapStateToProps, { showCat })(App)
