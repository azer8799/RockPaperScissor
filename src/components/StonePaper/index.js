import {Component} from 'react'

import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import GameItem from '../GameItem'

import {
  MainContainer,
  Heading,
  ScoreCard,
  Scores,
  Para,
  ButtonContainer,
  Button,
  Image,
  RowAlign,
  RulesButton,
  PopupContainer,
  ModalImage,
  ResultsContainer,
  EachContainer,
  Desc,
  Align,
} from './styledComponent'

class StonePaper extends Component {
  state = {
    score: 0,
    showResults: false,
    clickedImage: '',
    winner: '',
    opponentImage: '',
  }

  playingView = () => {
    const {choicesList} = this.props
    return (
      <ButtonContainer>
        <RowAlign>
          {choicesList.map(eachItem => (
            <GameItem
              key={eachItem.id}
              details={eachItem}
              gameResultsView={this.gameResultsView}
            />
          ))}
        </RowAlign>
      </ButtonContainer>
    )
  }

  generateRandomImages = () => {
    const {choicesList} = this.props

    // const choices = ['ROCK', 'PAPER', 'SCISSORS']
    const imageId =
      choicesList[Math.floor(Math.random() * choicesList.length)].id

    let imageUrl = ''

    if (imageId === 'ROCK') {
      imageUrl = `${choicesList[0].image}`
    } else if (imageId === 'SCISSORS') {
      imageUrl = `${choicesList[1].image}`
    } else {
      imageUrl = `${choicesList[2].image}`
    }

    return {imageId, imageUrl}
  }

  playAgain = () => {
    this.setState({showResults: false})
  }

  gameResultsView = (id, image) => {
    // 0: Rock , 1:Scissor , 2: Paper

    console.log(id, image)

    const {imageId, imageUrl} = this.generateRandomImages()

    if (id === 'ROCK' && imageId === 'SCISSORS') {
      this.setState(prevState => ({
        score: prevState.score + 1,
      }))
      this.setState({winner: 'YOU WON'})
    } else if (id === 'ROCK' && imageId === 'PAPER') {
      this.setState(prevState => ({
        score: prevState.score - 1,
      }))
      this.setState({winner: 'YOU LOSE'})
    } else if (id === 'SCISSORS' && imageId === 'PAPER') {
      this.setState(prevState => ({
        score: prevState.score + 1,
      }))
      this.setState({winner: 'YOU WON'})
    } else if (id === 'SCISSORS' && imageId === 'ROCK') {
      this.setState(prevState => ({
        score: prevState.score - 1,
      }))
      this.setState({winner: 'YOU LOSE'})
    } else if (id === 'PAPER' && imageId === 'ROCK') {
      this.setState(prevState => ({
        score: prevState.score + 1,
      }))
      this.setState({winner: 'YOU WON'})
    } else if (id === 'PAPER' && imageId === 'SCISSORS') {
      this.setState(prevState => ({
        score: prevState.score - 1,
      }))
      this.setState({winner: 'YOU LOSE'})
    } else {
      this.setState({winner: 'IT IS DRAW'})
    }

    this.setState({
      showResults: true,
      clickedImage: image,
      opponentImage: imageUrl,
    })
  }

  render() {
    const {score, showResults, clickedImage, opponentImage, winner} = this.state

    return (
      <MainContainer>
        <ScoreCard>
          <Heading>Rock Paper Scissors</Heading>
          <Scores>
            <Para>Score</Para>
            <Para> {score} </Para>
          </Scores>
        </ScoreCard>
        <PopupContainer>
          <Popup modal trigger={<RulesButton type="button">Rules</RulesButton>}>
            {close => (
              <>
                <PopupContainer>
                  <ModalImage
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </PopupContainer>
                <Button icon type="button" onClick={() => close()}>
                  <RiCloseLine className="cross-icon" />
                </Button>
              </>
            )}
          </Popup>
        </PopupContainer>

        {showResults ? (
          <ResultsContainer>
            <Align>
              <EachContainer>
                <Desc>You</Desc>
                <Image src={clickedImage} alt="your choice" />
              </EachContainer>
              <EachContainer>
                <Desc>Opponent</Desc>
                <Image src={opponentImage} alt="opponent choice" />
              </EachContainer>
            </Align>
            <Desc> {winner} </Desc>
            <RulesButton type="button" onClick={this.playAgain}>
              PLAY AGAIN
            </RulesButton>
          </ResultsContainer>
        ) : (
          this.playingView()
        )}
      </MainContainer>
    )
  }
}

export default StonePaper
