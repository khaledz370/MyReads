import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './LIstBooks'
import SearchPage from './SearchPage'
import { Route, Routes } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {}
  
  async componentDidMount() {
    const books = await BooksAPI.getAll();
    this.setState({ books: books })
  }

  changeShelf = (item) => {
    BooksAPI.update(item[0], item[1]).then(() => { BooksAPI.getAll().then(data => this.setState({ books: data })) })
  }

  render() {
    return (
      <div className="app">
        <Routes>
          <Route exact path='/search' element={<SearchPage books={typeof this.state.books !== 'undefined' ? this.state.books : ''} onChangeShelf={this.changeShelf} />} />
          <Route exact path='/' element={<ListBooks books={typeof this.state.books !== 'undefined' ? this.state.books : ''} onChangeShelf={this.changeShelf} />} />
        </Routes>
      </div>
    )
  }
}

export default BooksApp
