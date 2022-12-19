import { play } from '../../service/AudioService'
import { Wrapper } from './styled'

type Props = {
  id: string
  src: string
}

const Card = ({ id, src }: Props) => {
  return (
    <Wrapper>
      <button onClick={() => play(src)}>{id}</button>
    </Wrapper>
  )
}

export default Card
