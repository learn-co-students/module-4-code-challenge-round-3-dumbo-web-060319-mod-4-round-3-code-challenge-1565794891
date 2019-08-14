import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import CategorySelector from './CategorySelector'

class AccountContainer extends Component {
  state = {
    bankData: [],
    category: "All"
  }

  handleCategoryChange = (e) => {
    this.setState({ category: e.target.value })
  }

  componentDidMount() {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(res => res.json())
    .then((bankData) => {
      this.setState({
        bankData: bankData
      })
    })
  }

  whichTransactionsToRender = () => {
    let copiedTransactions = [...this.state.bankData]
    if (this.state.category === "All") {
      return copiedTransactions
    } else {
      let filteredTransactions = copiedTransactions.filter(transaction => transaction.category === this.state.category)
      return filteredTransactions
    }


  }

  render() {
    return (
      <div className="ui grid container">

        <CategorySelector handleCategoryChange={this.handleCategoryChange}/>

        <TransactionsList bankData={this.whichTransactionsToRender()} />

      </div>
    )
  }
}

export default AccountContainer
