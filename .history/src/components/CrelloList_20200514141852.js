import React from 'react'
import CrelloCard from './CrelloCard'
import CrelloActionButton from './CrelloActionButton'

const CrelloList = ({title, cards, listID}) => {
  return (
    <div style={styles.container}>
    <h4>{title}</h4>
    { cards.map(card => (
      <CrelloCard key={card.id} text={card.text} />
      ))}
      <CrelloActionButton listID />
    </div>
  )
}

const styles = {
  container: {
    backgroundColor: '#dfe3e6',
    borderRadius: 10,
    width: 295,
    padding: 8,
    marginRight: 8,
    height: '100%'
  }
}

export default CrelloList 