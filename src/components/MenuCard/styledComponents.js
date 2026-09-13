import styled from 'styled-components'

export const MenuCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: 0px 2px 4px 2px grey;
  flex: 1;
  margin: 8px;
  border-radius: 8px;
  padding: 10px;
  width: 95%;
`

export const VegIcon = styled.div`
  margin: 10px;
  border: 1px solid green;
  padding: 5px;
  width: 26px;
  height: 26px;
`

export const Vegspan = styled.div`
  background-color: green;
  width: 17px;
  height: 17px;
  border-radius: 50%;
`

export const NonVegIcon = styled(VegIcon)`
  border: 1px solid red;
`

export const NonVegspan = styled(Vegspan)`
  background-color: red;
`

export const DishDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: 10px;
`

export const DishTitle = styled.h2`
  color: black;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
`

export const DishCost = styled.p`
  color: black;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
`

export const DishDescription = styled.p`
  color: grey;
  font-size: 18px;
  margin-bottom: 10px;
`

export const DishCouter = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 25px;
  height: 20px;
  width: 106px;
  background-color: green;
  padding: 5px;
  margin-bottom: 10px;
  color: white;
  font-size: 12px;
`

export const DecrementButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 14px;
  height: 14px;
  color: inherit;
`

export const IncrementButton = styled(DecrementButton)``

export const DishNotAvailable = styled.p`
  color: red;
  font-size: 14px;
  margin-bottom: 10px;
`

export const DishCalories = styled.p`
  color: orange;
  font-size: 16px;
  font-weight: bold;
  margin: 40px 10px;
  text-align: center;
`

export const DishAddon = styled.p`
  color: blue;
  font-size: 14px;
`

export const DishImage = styled.img`
  height: 100px;
  width: 100px;
  margin: 10px;
  object-fit: cover;
`
