import React from 'react'
import Icon from '@material-ui/core/Icon'

class CrelloActionButton extends React.Component {
  renderAddButton = () => {
    const { list } = this.props

    const buttonText = list ? 'Add another list' : 'Add another card'
    const button

    return (
      <div style>
        <Icon>add</Icon>
        <p>{buttonText}</p>
      </div>
    )
  }

  render() {
    return this.renderAddButton()
  }
}

export default CrelloActionButton