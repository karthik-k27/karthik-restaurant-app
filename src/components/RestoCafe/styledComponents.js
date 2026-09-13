import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: white;
  font-family: 'Roboto';
`

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 15px;
`

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
`

export const Heading = styled.h1`
  color: black;
  font-size: 36px;
  font-weight: bold;
`

export const Counter = styled.div`
  color: white;
  font-size: 16px;
  background-color: orange;
  height: 20px;
  widht: 10px;
  border-radius: 10px;
  padding: 2px;
`

export const CartCounter = styled.div`
  display: flex;
`

export const TabsList = styled.ul`
  display: flex;
  align-items: center;
  background: white;
  padding: 18px 22px;
  border: none;
  cursor: pointer;
  color: grey;
  font-size: 14px;
  font-weight: 600;
  overflow-x: auto;
  scroll-behavior: smooth;
  box-shadow: 0px 2px 4px 2px grey;
`
