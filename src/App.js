import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './LIstBooks'
import SearchPage from './SearchPage'
import { Route, Routes } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
  }

  render() {
    return (
      <div className="app">
        <Routes>
        <Route exact path='/search' element={<SearchPage/>}/>
        <Route exact path='/' element={<ListBooks/>} />
        </Routes>
      </div>
    )
  }
}

export default BooksApp
