// Dependencies
import React, { Component } from 'react';
import '../assets/stylesheets/Books.css';

// Components
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import BooksContainer from '../../containers/Books';

class Books extends Component {

  render() {
    return (
      <div className="Books">
        <Jumbotron title="Books" parraph="true"/>
        <BooksContainer bookId=''/>
      </div>
    );
  }
}

export default Books;
