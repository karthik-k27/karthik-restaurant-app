import {Component} from 'react'

import {FaShoppingCart} from 'react-icons/fa'

import Loader from 'react-loader-spinner'

import TabItem from '../TabItem'
import MenuCard from '../MenuCard'

import {
  AppContainer,
  Navbar,
  Heading,
  MenuList,
  Counter,
  CartCounter,
  TabsList,
} from './styledComponents'

class RestoCafe extends Component {
  state = {
    restaurantData: {},
    isLoading: true,
    hasError: false,
    activeCategoryId: '',
    cartCount: 0,
    itemQuantities: {},
  }

  componentDidMount() {
    this.getMenu()
  }

  handleIncrement = dishId => {
    this.setState(prevState => ({
      itemQuantities: {
        ...prevState.itemQuantities,
        [dishId]: (prevState.itemQuantities[dishId] || 0) + 1,
      },
      cartCount: prevState.cartCount + 1,
    }))
  }

  handleDecrement = dishId => {
    this.setState(prevState => {
      const current = prevState.itemQuantities[dishId] || 0
      if (current <= 0) return null
      return {
        itemQuantities: {...prevState.itemQuantities, [dishId]: current - 1},
        cartCount: prevState.cartCount - 1,
      }
    })
  }

  handleCategoryChange = categoryId => {
    this.setState({activeCategoryId: categoryId})
  }

  addonCat = addOn => ({
    addon_category: addOn.addon_category,
    addon_category_id: addOn.addon_category_id,
    addon_selection: addOn.addon_selection,
    nexturl: addOn.nexturl,
    addons: addOn.addons.map(each => this.dishes(each)),
  })

  dishes = dish => ({
    dishId: dish.dish_id,
    dishName: dish.dish_name,
    dishPrice: dish.dish_price,
    dishImage: dish.dish_image,
    dishCurrency: dish.dish_currency,
    dishCalories: dish.dish_calories,
    dishDescription: dish.dish_description,
    dishAvailability: dish.dish_Availability,
    dishType: dish.dish_Type,
    addonCat: (dish.addonCat || []).map(each => this.addonCat(each)),
  })

  menuList = menu => ({
    menuCategory: menu.menu_category,
    menuCategoryId: menu.menu_category_id,
    menuCategoryImage: menu.menu_category_image,
    nexturl: menu.nexturl,
    categoryDishes: menu.category_dishes.map(dishDetails =>
      this.dishes(dishDetails),
    ),
  })

  getMenu = async () => {
    try {
      const response = await fetch(
        'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details',
      )
      if (response.ok === true) {
        const data = await response.json()
        const fetchedData = data[0]
        const updatedData = {
          restaurantId: fetchedData.restaurant_id,
          restaurantName: fetchedData.restaurant_name,
          restaurantImage: fetchedData.restaurant_image,
          tableId: fetchedData.table_id,
          tableName: fetchedData.table_name,
          branchName: fetchedData.branch_name,
          nextUrl: fetchedData.nexturl,
          tableMenuList: fetchedData.table_menu_list.map(menuDetails =>
            this.menuList(menuDetails),
          ),
        }
        this.setState({
          restaurantData: updatedData,
          activeCategoryId: updatedData.tableMenuList[0].menuCategoryId,
          isLoading: false,
        })
      } else {
        this.setState({isLoading: false, hasError: true})
      }
    } catch (error) {
      console.error('getMenu failed:', error)
      this.setState({isLoading: false, hasError: true})
    }
  }

  renderLoading = () => (
    <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
  )

  renderFailure = () => (
    <AppContainer>
      <p>Somthing went wrong. Please try again.</p>
      <button type="button" onClick={this.getMenu}>
        Retry
      </button>
    </AppContainer>
  )

  renderMenuList = () => {
    const {restaurantData, activeCategoryId, cartCount, itemQuantities} =
      this.state

    const menuList = restaurantData.tableMenuList
    const activeCategoryObject = menuList.find(
      cat => cat.menuCategoryId === activeCategoryId,
    )
    const currentDishes = activeCategoryObject?.categoryDishes || []
    const restName = restaurantData.restaurantName

    return (
      <AppContainer>
        <Navbar>
          <Heading>{restName}</Heading>
          <CartCounter>
            <FaShoppingCart />
            <Counter>{cartCount}</Counter>
          </CartCounter>
        </Navbar>
        <TabsList>
          {menuList.map(category => (
            <TabItem
              tabDetails={category}
              key={category.menuCategoryId}
              onSelect={this.handleCategoryChange}
              isActive={activeCategoryId === category.menuCategoryId}
            />
          ))}
        </TabsList>
        <MenuList>
          {currentDishes.map(dish => (
            <MenuCard
              key={dish.dishId}
              menuDetails={dish}
              quantity={itemQuantities[dish.dishId] || 0}
              onIncreament={this.handleIncrement}
              onDecreament={this.handleDecrement}
            />
          ))}
        </MenuList>
      </AppContainer>
    )
  }

  render() {
    const {isLoading, hasError} = this.state

    if (isLoading) return this.renderLoading()
    if (hasError) return this.renderFailure()
    return this.renderMenuList()
  }
}

export default RestoCafe
