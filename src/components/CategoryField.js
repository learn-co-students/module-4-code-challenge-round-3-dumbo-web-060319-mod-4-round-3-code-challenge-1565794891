import React from 'react'

const CategoryField = (props) => {

 

  const { category, checked } = props

  return (
    <div className=" four wide field">
      <div className="ui radio checkbox">

        <input
          onClick={event => props.handleChange(event.target.value)}
          type="radio"
          name="category"
          checked={checked}
          value={category}
        />
        <label>{ category }</label>

      </div>
    </div>
  )
}

export default CategoryField
