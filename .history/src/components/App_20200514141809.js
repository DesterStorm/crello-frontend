import React, { Component } from 'react';
import CrelloList from './CrelloList'
import { connect } from 'react-redux'
import CrelloActionButton from './CrelloActionButton'

class App extends Component {
  render () {
    const { lists } =  this.props
    return (
      <div className="App">
        <h2>the beginning of the end</h2>
        <div style= {styles.listsContainer}>
          { lists.map(list => (
            <CrelloList listID={} key={list.id} title={list.title} cards={list.cards} /> 
          ))}
          <CrelloActionButton list />
        </div>
      </div>
    );
  }
}

const styles = {
  listsContainer: {
    display: "flex",
    flexDirection: "row", 
  }
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App);
