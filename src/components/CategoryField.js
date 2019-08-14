import React from 'react'

class CategoryField extends React.Component {

  handleClick = (event) => {
    this.props.handleFilter(event.target.value)
  }

  render(){

    return (
      <div className=" four wide field">
        <div className="ui radio checkbox">

          <input
            type="radio"
            name="category"
            value={ this.props.category }
            checked={ this.props.checked }
            onClick={this.handleClick}
          />
          <label>{ this.props.category }</label>

        </div>
      </div>
    )

  }


}

export default CategoryField
