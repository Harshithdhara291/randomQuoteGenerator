import {useState} from 'react'
import {Route, Switch, BrowserRouter, Redirect} from 'react-router-dom'
import Random from './components/Random'

import Bookmarks from './components/Bookmarks'

import {GlobalStyle} from './styledComponents'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Random} />
      <Route exact path="/bookmarks" component={Bookmarks} />
    </Switch>
  </BrowserRouter>
)

export default App
