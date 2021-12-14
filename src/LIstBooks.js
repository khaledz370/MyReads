import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import CurrentlyReading from './CurrentlyReading';
import Read from './Read';
import WantToRead from './WantToRead';
import * as BooksAPI from './BooksAPI'

class ListBooks extends Component {
  state = {}
  constructor (props) {
    super(props)
    BooksAPI.getAll().then(data =>
      this.setState({ books: data })
    )
  }
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <CurrentlyReading books={typeof this.state.books !== 'undefined' ?this.state.books:''}/>
            <WantToRead books={typeof this.state.books !== 'undefined' ?this.state.books:''}/>
            <Read books={typeof this.state.books !== 'undefined' ?this.state.books:''}/>
          </div>
        </div>
        <div className="open-search">
          <Link to='/search' className='openSearchButton'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks;