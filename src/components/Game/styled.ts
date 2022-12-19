import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  width: 300px;
  margin: 0 auto;
`

export const WrapperButton = styled.div`
  display: flex;
  gap: 8px;
`

export const Message = styled.div<{ correct: boolean }>`
  width: 100;
  color: ${(prop) => (prop.correct ? 'green' : 'red')};
  text-align: 'center';
  font-size: 20px;
  font-weight: 500;
`
