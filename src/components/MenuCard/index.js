import {FaPlus, FaMinus} from 'react-icons/fa'
import {
  MenuCardContainer,
  VegIcon,
  Vegspan,
  NonVegIcon,
  NonVegspan,
  DishDetails,
  DishTitle,
  DishCost,
  DishDescription,
  DishCouter,
  DecrementButton,
  IncrementButton,
  DishNotAvailable,
  DishCalories,
  DishAddon,
  DishImage,
} from './styledComponents'

const MenuCard = props => {
  const {menuDetails, quantity, onIncreament, onDecreament} = props
  const {
    dishId,
    dishName,
    dishCurrency,
    dishPrice,
    dishDescription,
    dishCalories,
    addonCat,
    dishImage,
    dishType,
    dishAvailability,
  } = menuDetails

  const onClickIncrement = () => {
    onIncreament(dishId)
  }

  const onClickDecrement = () => {
    onDecreament(dishId)
  }

  return (
    <MenuCardContainer>
      {dishType === 1 ? (
        <VegIcon>
          <Vegspan>{}</Vegspan>
        </VegIcon>
      ) : (
        <NonVegIcon>
          <NonVegspan>{}</NonVegspan>
        </NonVegIcon>
      )}
      <DishDetails>
        <DishTitle>{dishName}</DishTitle>
        <DishCost>
          {dishCurrency} {dishPrice}
        </DishCost>
        <DishDescription>{dishDescription}</DishDescription>
        {dishAvailability ? (
          <DishCouter>
            <DecrementButton onClick={onClickDecrement}>
              <FaMinus />
            </DecrementButton>
            {quantity}
            <IncrementButton onClick={onClickIncrement}>
              <FaPlus />
            </IncrementButton>
          </DishCouter>
        ) : (
          <DishNotAvailable>Not Available</DishNotAvailable>
        )}
        {addonCat.length ? (
          <DishAddon>Customizations available</DishAddon>
        ) : null}
      </DishDetails>
      <DishCalories>{dishCalories} Calories</DishCalories>
      <DishImage src={dishImage} alt={dishName} />
    </MenuCardContainer>
  )
}

export default MenuCard
