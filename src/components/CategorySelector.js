import React from 'react'
import CategoryField from './CategoryField'
import categories from '../categories'

const CategorySelector = (props) => {
  // console.log(props.transactions)
  const categoryFields = categories.map(
    (category, i) => {

     const checked = category === props.activeCategory

      return (
        <CategoryField 
          // onClick={props.handleChange}
          handleChange={props.handleChange}
          key={ i }
          checked={ checked }
          category={ category }
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
