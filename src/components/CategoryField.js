import React from 'react'

const CategoryField = (props) => {
  
  const { category, checked } = props

  return (
    <div className=" four wide field">
      <div className="ui radio checkbox">

        <input
          type="radio"
          name="category"
          checked={props.checked}
          value={category}
          onChange={(event) => props.handleChange(event)}
        />
        <label>{ category }</label>

      </div>
    </div>
  )
}

export default CategoryField
// checked ={ this.state.checked === "props.searchTerm"}