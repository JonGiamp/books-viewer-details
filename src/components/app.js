import React, { Component } from 'react';
import BookList from '../containers/books-list';
import BookDetail from '../containers/books-detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}
