import styled from 'styled-components'

export const TabItemContainer = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style-type: none;
  padding: 20px;
  margin-left: 10px;
`

export const TabButton = styled.button`
  background-color: transparent;
  color: ${props => (props.isActive ? 'red' : 'black')};
  border: none;
  border-bottom: ${props => (props.isActive ? '2px solid red' : '0px')};
  font-family: 'Open Sans';
  font-size: 14px;
  font-weight: 600;
  border-radius: 6px;
  min-width: 25px;
  max-width: 150px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 24px;
  margin-top: 15px;
  cursor: pointer;
  outline: none;
`
