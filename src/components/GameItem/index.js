import {Image, Button} from './styledComponent'

const GameItem = props => {
  const {details, gameResultsView} = props
  const {id, image} = details

  const gameResults = () => {
    gameResultsView(id, image)
  }

  return (
    <Button
      type="button"
      data-testid={`${id.toLowerCase()}Button`}
      onClick={gameResults}
    >
      <Image src={image} alt={id} key={id} />
    </Button>
  )
}

export default GameItem
