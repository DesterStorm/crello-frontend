import React from 'react'

class CrelloActionButton extends React.Component {

  renderAddButton = () => {
    const { list } = this.props

    const buttonText = list ? 'Add another list' : 'Add another card'

    return (
      <div>
        <Icon>add</Icon>
        <p></p>
      </div>
    )
  }

  render() {
    return null
  }
}

export default CrelloActionButton