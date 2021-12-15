import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import Category from './Category';

class ListBooks extends Component {
  state = {}
  constructor (props) {
    super(props)
    BooksAPI.getAll().then(data =>
      this.setState({ books: data })
    )
  }
  changeCategory = (item) => {
    BooksAPI.getAll()
    BooksAPI.update(item[0], item[1])

    BooksAPI.getAll().then(data =>
      this.setState({ books: data }))
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>

            <Category books={typeof this.state.books !== 'undefined' ? this.state.books : ''} onChangeCategory={this.changeCategory} category={'Currently Reading'} categoryName={'currentlyReading'} />

            <Category books={typeof this.state.books !== 'undefined' ? this.state.books : ''} onChangeCategory={this.changeCategory} category={'Want to Read'} categoryName={'wantToRead'} />

            <Category books={typeof this.state.books !== 'undefined' ? this.state.books : ''} onChangeCategory={this.changeCategory} category={'Read'} categoryName={'read'} />

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