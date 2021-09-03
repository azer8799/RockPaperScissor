import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  background-color: #223a5f;
  min-height: 100vh;
`
export const ScoreCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: transparent;
  border: 1px solid #ffffff;
  padding: 10px;
  border-radius: 15px;
`

export const Scores = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 10px;
  border-radius: 15px;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 32px;
  margin: 15px;
`

export const Para = styled.p`
  font-family: 'Roboto';
  font-size: 25px;
  margin: 10px;
  color: black;
  text-align: center;
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Image = styled.img`
  margin: 15px;
  margin-left: 20px;
  width: 100px;
`

export const ModalImage = styled.img`
  margin: 15px;
  width: 400px;
`

export const Align = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  border: none;
  background-color: transparent;
  cursor: pointer;
`
export const RowAlign = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  //   padding-inline-start: 0;
  //   list-style-type: none;
`
export const RulesButton = styled.button`
  margin: 15px;
  padding: 15px;
  border: none;
  background-color: #ffff;
  border-radius: 20px;
  font-weight: 600;
  cursor: pointer;
  align-self: center;
`
export const PopupContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`

export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const EachContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`

export const Desc = styled.p`
  font-family: 'Roboto';
  font-size: 32px;
  margin: 15px;
  text-align: center;
  color: #ffffff;
`
