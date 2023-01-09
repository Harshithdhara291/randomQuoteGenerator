import {Link} from 'react-router-dom'
import Context from '../../context/Context'
import BookmarkItem from '../BookmarkItem'
import './index.css'

const Bookmarks = () => (
  <Context.Consumer>
    {value => {
      const {bookmarksList} = value
      console.log(bookmarksList)
      return (
        <>
          <div className="main-containers">
            <div className="linkss">
              <Link to="/">
                <button type="button" className="home-buttons">
                  Home
                </button>
              </Link>
              <Link to="/bookmarks">
                <button type="button" className="bookmarks-buttons">
                  Bookmarks
                </button>
              </Link>
            </div>
            <ul>
              {bookmarksList.map(each => (
                <BookmarkItem each={each} key={each.quotes.id} />
              ))}
            </ul>
          </div>
        </>
      )
    }}
  </Context.Consumer>
)

export default Bookmarks
