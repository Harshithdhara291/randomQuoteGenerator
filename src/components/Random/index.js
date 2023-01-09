import {Component} from 'react'
import {Link} from 'react-router-dom'
import {FcBookmark} from 'react-icons/fc'
import './index.css'

class Random extends Component {
  state = {
    isLoading: true,
    quotes: {
      content:
        'Knowledge comes, but wisdom lingers. It may not be difficult to store up in the mind a vast quantity of facts within a comparatively short time, but the ability to form judgments requires the severe discipline of hard work and the tempering heat of experience and maturity.',
      author: 'Calvin Coolidge',
    },
    bookmarksList: [],
  }

  componentDidMount() {
    this.useClickingButton()
  }

  useClickingButton = async () => {
    const response = await fetch('https://api.quotable.io/random')
    const data = await response.json()
    const formattedData = {author: data.author, content: data.content}
    console.log(formattedData)
    this.setState({quotes: formattedData, isLoading: false})
  }

  appendingBookmarks = () => {
    const {quotes, bookmarksList} = this.state
    this.setState({bookmarksList: [quotes, ...bookmarksList]})
  }

  render() {
    const {quotes, bookmarksList, isLoading} = this.state
    console.log(bookmarksList)
    return (
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
              <p className="quote-auth">{quotes.author}</p>
              <button type="button" onClick={this.appendingBookmarks}>
                <FcBookmark className="icon" />
              </button>
            </div>
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
    )
  }
}
export default Random
