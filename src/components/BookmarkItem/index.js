import './index.css'

const BookmarkItem = props => {
  const {each} = props
  return (
    <div className="item">
      <h1 className="head">{each.quotes.content}</h1>
      <p className="para">- {each.quotes.author}</p>
    </div>
  )
}

export default BookmarkItem
