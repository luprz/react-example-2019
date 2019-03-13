// Dependencies
import React, { Component } from 'react';
import '../assets/stylesheets/Books.css';

// Components
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import CreateBook from '../../containers/Books/create';
import BooksContainer from '../../containers/Books';

class Books extends Component {

  render() {
    return (
      <div className="Books">
        <Jumbotron title="Books" parraph="true"/>
        <CreateBook />
        <BooksContainer bookId=''/>
      </div>
    );
  }
}

export default Books;
