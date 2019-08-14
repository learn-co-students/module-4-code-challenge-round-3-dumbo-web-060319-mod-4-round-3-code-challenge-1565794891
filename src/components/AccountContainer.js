import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import CategorySelector from './CategorySelector'


class AccountContainer extends Component {
  state = {
    transactions: []
  }

  componentDidMount() {
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
    .then(res => res.json())
    .then(transactionsData => {
      // console.log(transactionsData)
      this.setState({transactions: transactionsData})

    })

  }

  render() {
    return (
      <div className="ui grid container">

        <CategorySelector />

        <TransactionsList transactions={this.state.transactions}/>

      </div>
    )
  }
}

export default AccountContainer
