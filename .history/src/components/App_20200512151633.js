import React, { Component } from 'react';
import CrelloList from './CrelloList'
import { connect } from 'react-redux'

class App extends Component {
  render () {
    const { lists } =  this.props
    return (
      <div className="App">
        <h2>the beginning of the end</h2>
        <div style= {styles.listsContainer}>
          { lists.map(list => (
            <CrelloList title={list.title} cards={list.cards} /> 
          ))}
        </div>
      </div>
    );
  }
}

const styles = {
  listsContainer: {
    display: "flex",
    flexDirection: "row", 
    marginRight:
  }
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App);
