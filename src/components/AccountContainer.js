import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import CategorySelector from './CategorySelector'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {
  state = {
    transactions: [],
    copyTransaction: [],
    selectedCatagory: "All"
  }

  componentDidMount() {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
      .then(res => res.json())
      .then(data => this.setState({
        transactions: data,
        copyTransaction: data
      }))
  }

  handleChange = (event) =>  {
    //... your code here
    console.log(event)
    // console.log('hi')
    if (event === 'All') {

      let unfilteredTransaction = this.state.transactions
      this.setState({
        selectedCatagory: event,
        copyTransaction: unfilteredTransaction

      })
    }
    
    else {

      let filteredTransaction = this.state.transactions.filter(transaction => transaction.category.includes(event))
      this.setState({
        selectedCatagory: event,
        copyTransaction: filteredTransaction
      })
    }
    
    // let filteredTransaction = this.state.transactions.filter(transaction => transaction.category.includes(event))
    // this.setState({
    //   selectedCatagory: event,
    //   copyTransaction: filteredTransaction
    // })
  }

  render() {
    // console.log(transactions)
    // console.log(this.state.transactions)
    return (
      <div className="ui grid container">

        <CategorySelector handleChange={this.handleChange} transactions={this.state.copyTransaction} />

        <TransactionsList transactions={this.state.copyTransaction}  />

      </div>
    )
  }
}

export default AccountContainer
