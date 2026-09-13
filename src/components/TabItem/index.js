import {TabItemContainer, TabButton} from './styledComponents'

const TabItem = props => {
  const {tabDetails, onSelect, isActive} = props
  const {menuCategory, menuCategoryId} = tabDetails

  const selectTab = () => {
    onSelect(menuCategoryId)
  }

  return (
    <TabItemContainer>
      <TabButton isActive={isActive} onClick={selectTab}>
        {menuCategory}
      </TabButton>
    </TabItemContainer>
  )
}

export default TabItem
