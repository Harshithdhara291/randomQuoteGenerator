import {Component} from 'react'
import {Route, Switch, BrowserRouter} from 'react-router-dom'
import Random from './components/Random'
import Context from './context/Context'

import Bookmarks from './components/Bookmarks'

class App extends Component {
  state = {bookmarksList: []}

  addQuoteItem = quotes => {
    const {bookmarksList} = this.state
    const updatedList = [...bookmarksList, quotes]
    console.log(updatedList)
    this.setState({bookmarksList: updatedList})
  }

  //     addQuoteItem = product => {
  //     const {cartList} = this.state
  //     const productObject = cartList.find(
  //       eachCartItem => eachCartItem.id === product.id,
  //     )

  //     if (productObject) {
  //       this.setState(prevState => ({
  //         cartList: prevState.cartList.map(eachCartItem => {
  //           if (productObject.id === eachCartItem.id) {
  //             const updatedQuantity = eachCartItem.quantity + product.quantity

  //             return {...eachCartItem, quantity: updatedQuantity}
  //           }

  //           return eachCartItem
  //         }),
  //       }))
  //     } else {
  //       const updatedCartList = [...cartList, product]

  //       this.setState({cartList: updatedCartList})
  //     }
  //   }

  render() {
    const {bookmarksList} = this.state
    return (
      <Context.Provider
        value={{
          bookmarksList,
          addQuoteItem: this.addQuoteItem,
        }}
      >
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Random} />
            <Route exact path="/bookmarks" component={Bookmarks} />
          </Switch>
        </BrowserRouter>
      </Context.Provider>
    )
  }
}

export default App
