import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Category from './Category';

class ListBooks extends Component {

  changeCategory = (item) => {
    this.props.onChangeCategory(item)
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>

            <Category books={this.props.books} onChangeCategory={this.changeCategory} category={'Currently Reading'} categoryName={'currentlyReading'} />

            <Category books={this.props.books} onChangeCategory={this.changeCategory} category={'Want to Read'} categoryName={'wantToRead'} />

            <Category books={this.props.books} onChangeCategory={this.changeCategory} category={'Read'} categoryName={'read'} />

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