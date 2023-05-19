import {Component} from 'react'

import {
  Container,
  CardContainer,
  Heading,
  InputContainer,
  ParText,
  Input,
  Button,
} from './style'

class EditableText extends Component {
  state = {EditText: '', isButtonClicked: false}

  onClickButton = () => {
    this.setState(prev => ({
      isButtonClicked: !prev.isButtonClicked,
    }))
  }

  onChangeSearchInput = e => {
    this.setState({EditText: e.target.value})
  }

  render() {
    const {EditText, isButtonClicked} = this.state
    const EditOrSaveButton = isButtonClicked ? 'Edit' : 'Save'
    return (
      <Container>
        <CardContainer>
          <Heading>Editable Text Input</Heading>
          <InputContainer>
            {isButtonClicked ? (
              <ParText>{EditText}</ParText>
            ) : (
              <Input
                type="text"
                value={EditText}
                onChange={this.onChangeSearchInput}
              />
            )}
            <Button onClick={this.onClickButton}>{EditOrSaveButton}</Button>
          </InputContainer>
        </CardContainer>
      </Container>
    )
  }
}
export default EditableText
