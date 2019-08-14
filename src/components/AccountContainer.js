import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import CategorySelector from './CategorySelector'
import {transactions} from '../transactionsData'
import Transaction from './Transaction'

class AccountContainer extends Component {
  state={
    transactions: [],
    filterTerm: '',
    activeCategory: ''
  }

  componentDidMount(){
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
    .then(res => res.json())
    .then(data => this.setState({
      transactions: data
    }))
  }

  handleChange = (event) => {
    //... your code here
    this.setState({
      activeCategory: event.target.value
    })
  }

  render() {
    // console.log(transactions)
    let transactions = [...this.state.transactions]
    if (this.state.activeCategory != 'All') {
      transactions = transactions.filter(transaction => {
        return transaction.category === this.state.activeCategory;
      });
    }
    else{
      transactions
    }

    return (
      <div className="ui grid container">
        <CategorySelector
          handleChange={this.handleChange}
          activeCategory={this.state.activeCategory} filterTerm={this.state.filterTerm}
        />

        <TransactionsList transactions={transactions} />
      </div>
    );
  }
}

export default AccountContainer
