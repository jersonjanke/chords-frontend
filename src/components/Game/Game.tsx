import { useEffect, useState } from 'react'
import Card from '../../components/Card'
import { getRandomNumber } from '../../service/GameService'
import { allChords } from '../../utils/chords'
import Button from '../Button'
import { play } from '../../service/AudioService'
import { Wrapper, Message } from './styled'

type Chord = {
  id: string
  src: string
  type: string
}

const Game = () => {
  const [correct, setCorrect] = useState(false)
  const [showMessage, setShowMessage] = useState(false)
  const [chord, setChord] = useState<Chord | null>(null)
  const [correctNote, setCorrectNote] = useState<Chord | null>(null)

  useEffect(() => {
    const active = allChords[getRandomNumber(4)]
    setChord(active)
    setCorrectNote(active)
  }, [])

  const handleCheck = (type: '+' | '-') => {
    setCorrect(chord?.type === type)
    const active = allChords[getRandomNumber(4)]
    setChord(active)
    setCorrectNote(active)
    setShowMessage(true)
  }

  const handleSubmit = () => {
    setShowMessage(false)
    chord && play(chord.src)
  }

  return (
    <Wrapper>
      {/* <Card id={'Tocar'} src={chord.src} /> */}
      <button onClick={handleSubmit}>{'Tocar'}</button>
      <div>
        <Button onClick={() => handleCheck('+')}>Maior</Button>
        <Button onClick={() => handleCheck('-')}>Menor</Button>
      </div>
      {showMessage && (
        <Message correct={correct}>
          {correct
            ? `Acertou - ${correctNote?.id}`
            : `Errou - ${correctNote?.id}`}
        </Message>
      )}
    </Wrapper>
  )
}

export default Game
