import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'

/*eslint-disable */
class SearchPage extends Component {
  state = {
    query: ''
  }
  constructor (props) {
    super(props)
    BooksAPI.getAll().then(data =>
      this.setState({ books: data })
    )
  }

  onSearch = (event) => {
    this.setState({ query: event.target.value })
    BooksAPI.search(this.state.query).then(data => this.setState({ books: data }))
  }
  changeShelf = (bookId, event) => {
    this.props.onChangeShelf([bookId, event.target.value])
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className='close-search'>Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={this.onSearch} />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {typeof this.state.books !== "undefined" ? Object.entries(this.state.books).map((book) => {
              if (this.state.query !== '' || book[0] !== "error") {
                try {
                  return (
                    <li key={book[1].id}>
                      <div className="book">
                        <div className="book-top">
                          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book[1].imageLinks.thumbnail}")` }}></div>
                          <div className="book-shelf-changer">
                            <select value={book[1].shelf} onChange={() => this.changeShelf(book[1], event)}>
                              <option value="move" disabled>Move to...</option>
                              <option value="currentlyReading">Currently Reading</option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                          </div>
                        </div>
                        <div className="book-title">{book[1].title}</div>
                        <div className="book-authors">{book[1].authors}</div>
                      </div>
                    </li>
                  )
                } catch (err) {
                  console.log(err);
                }
              }
            }) : ''}
          </ol>
        </div>
      </div>
    )
  }
}
export default SearchPage;