import React from 'react'
import CategoryField from './CategoryField'
import categories from '../categories'

const CategorySelector = (props) => {
  constructor(){
   super();
   this.state = {
     categoryFilter: '',
     entertainment: '',
     income: '',
     food: '',
     fashion: '',
     gift: '',
     atm:,
     transportation: '',
     housing: '',
     misery: ''
   }
 }


  const categoryFields = categories.map(
    (category, i) => {

     const checked = category === props.activeCategory

     function handleFilter(){

     }

      return (
        <CategoryField
          key={ i }
          checked={ checked }
          category={ category }
          handleFilter={handleFilter}
        />
      )
    }
  )

  return (
    <div className="sixteen wide column">
      <div className="ui form">
        <div className="inline fields">
          { categoryFields }
        </div>
      </div>
    </div>
  )
}

export default CategorySelector
