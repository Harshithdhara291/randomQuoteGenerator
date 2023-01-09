import {Link} from 'react-router-dom'
import './index.css'

const Bookmarks = () => (
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
  </div>
)

export default Bookmarks
