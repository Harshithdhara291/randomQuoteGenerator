import {Component} from 'react'
import {Link} from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'
import {BsFillBookmarkStarFill} from 'react-icons/bs'
import Context from '../../context/Context'

import './index.css'

const options = [
  '',
  'technology,famous-quotes',
  'technology|famous-quotes',
  'technology',
  'famous-quotes',
  'history|civil-rights',
  'history',
  'love|happiness',
  'love',
  'happiness',
]

class Random extends Component {
  state = {
    isLoading: true,
    quotes: {
      content:
        'Knowledge comes, but wisdom lingers. It may not be difficult to store up in the mind a vast quantity of facts within a comparatively short time, but the ability to form judgments requires the severe discipline of hard work and the tempering heat of experience and maturity.',
      author: 'Calvin Coolidge',
    },
    tags: '',
  }

  componentDidMount() {
    this.useClickingButton()
  }

  useClickingButton = async () => {
    const {tags} = this.state
    console.log(tags)
    const apiUrl = `https://api.quotable.io/random?tags=${tags}`
    const response = await fetch(apiUrl)
    const data = await response.json()
    const formattedData = {
      author: data.author,
      content: data.content,
      id: uuidv4(),
    }
    console.log(formattedData)
    this.setState({quotes: formattedData, isLoading: false})
  }

  onOptionChangeHandler = event => {
    this.setState({tags: event.target.value})
  }

  appendingBookmarks = () => (
    <Context.Consumer>
      {value => {
        const {quotes, isLoading} = this.state
        console.log(quotes)

        const {addQuoteItem} = value

        const onClickAdd = () => {
          console.log('onclick')
          addQuoteItem({quotes})
        }
        return (
          <>
            <div className="main-container">
              <div className="links">
                <Link to="/">
                  <button type="button" className="home-button">
                    Home
                  </button>
                </Link>
                <Link to="/bookmarks">
                  <button type="button" className="bookmarks-button">
                    Bookmarks
                  </button>
                </Link>
              </div>
              {isLoading ? (
                <div className="loader">
                  <h1>Loading...</h1>
                </div>
              ) : (
                <div className="main-container2">
                  <div className="quote">
                    <h1 className="quote-head">{quotes.content}</h1>
                    <div className="para-but">
                      <p className="quote-auth"> - {quotes.author}</p>
                      <button
                        type="button"
                        onClick={onClickAdd}
                        className="icon"
                      >
                        <BsFillBookmarkStarFill />
                      </button>
                    </div>
                  </div>
                  <select
                    onChange={this.onOptionChangeHandler}
                    className="drop-down"
                  >
                    {options.map(option => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                  <button
                    type="button"
                    className="button"
                    onClick={this.useClickingButton}
                  >
                    Next Quote
                  </button>
                </div>
              )}
            </div>
          </>
        )
      }}
    </Context.Consumer>
  )

  render() {
    return <>{this.appendingBookmarks()}</>
  }
}

export default Random
