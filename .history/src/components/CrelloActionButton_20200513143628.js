import React from 'react'
import Icon from '@material-ui/core/Icon'

class CrelloActionButton extends React.Component {
  renderAddButton = () => {
    const { list } = this.props

    const buttonText = list ? 'Add another list' : 'Add another card'

    return (
      <div>
        <Icon>add</Icon>
        <p>{buttonText}</p>
      </div>
    )
  }

  render() {
    return this.render
  }
}

export default CrelloActionButton