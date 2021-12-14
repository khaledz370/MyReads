import React, { Component } from 'react'
/*eslint-disable */
class CurrentlyReading extends Component {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                            {typeof this.props.books !== "undefined" ?  Object.entries(this.props.books).map((book) => {
                                if (book[1].shelf === 'currentlyReading') {
                                    return (
                                        <li key={book[1].id}>
                                        <div className="book">
                                            <div className="book-top">
                                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book[1].imageLinks.thumbnail}")` }}></div>
                                                <div className="book-shelf-changer">
                                                    <select defaultValue={'currentlyReading'}>
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
                                }
                            }) : ''}
                    </ol>
                </div>
            </div>
        )
    }
}
export default CurrentlyReading;