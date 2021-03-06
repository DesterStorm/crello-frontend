import React from 'react'
import CrelloCard from './CrelloCard'
import CrelloActionButton from './CrelloActionButton'
import { Droppable } from 'react-beautiful-dnd'
import styled from 'styled-components'

const ListContainer = styled.div`
  background-color: '#dfe3e6',
  border-radius: 10,
  width: 295,
  padding: 8,
  marginRight: 8,
  height: '100%'
`

const CrelloList = ({title, cards, listID}) => {
  return (
    <Droppable droppableId={String(listID)}>
      { provided => (
        <div {...provided.droppableProps} ref={provided.innerRef} style={styles.container}>
          <h4>{title}</h4>
          { cards.map((card, index) => (
            <CrelloCard key={card.id} index={index} text={card.text} id={card.id} />
            ))}
            <CrelloActionButton listID={listID} />
            {provided.placeholder}
        </div>
      )}
    </Droppable>
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