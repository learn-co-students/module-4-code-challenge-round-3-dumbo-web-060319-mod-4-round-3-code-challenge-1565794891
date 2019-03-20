import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import CategorySelector from './CategorySelector'
import Search from './Search'

class AccountContainer extends Component {
  render() {
    return (
      <div className="ui grid container">
        <CategorySelector />
        <Search />
        <TransactionsList />
      </div>
    )
  }
}

export default AccountContainer
