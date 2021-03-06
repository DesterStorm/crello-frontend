import React from 'react'
import Icon from '@material-ui/core/Icon'
import Textarea from 'react-textarea-autosize';
import Card from '@material-ui/core/Card';

class CrelloActionButton extends React.Component {

  state = {
    formOpen: false
    text: ''
  }

  openForm = () => {
    this.setState({
      formOpen: true
    })
  }

  closeForm = (e) => {
    this.setState({
      formOpen: false
    })
  }

  renderAddButton = () => {
    const { list } = this.props

    const buttonText = list ? 'Add another list' : 'Add another card'
    const buttonTextOpacity = list ? 1 : 0.5
    const buttonTextColor = list ? 'white' : 'inherit'
    const buttonTextBackground = list ? 'rbga(0,0,0,.15)' : 'inherit'

    return (
      <div 
        onClick={this.openForm}
        style={{
          ...styles.openForButtonGroup,
          opacity: buttonTextOpacity, 
          color: buttonTextColor, 
          backgroundColor: buttonTextBackground
        }}
      >
        <Icon>add</Icon>
        <p>{buttonText}</p>
      </div>
    )
  }

  renderForm = () => {
    const { list } = this.props 
    const placeholder = list ? 'Enter list title' : 'Enter the card title'
    const buttonTitle = list ? 'Add List' : 'Add Card'

    return <div>
      <Card>
        <Textarea 
          placeholder={placeholder} autoFocus onBlur={this.closeForm}
        />
      </Card>
    </div>
  }

  render() {
    return this.state.formOpen ? this.renderForm() : this.renderAddButton()
  }
}

const styles = {
  openForButtonGroup: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: 3,
    height: 36,
    width: 260,
    paddingLeft: 8
  }
}

export default CrelloActionButton