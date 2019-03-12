import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { showBooks, findOneBook } from './actions'
import { Link } from 'react-router-dom'

class Books extends Component {
  static propTypes = {
    bookId: PropTypes.string.isRequired
  };
  
  componentWillMount() {
    if (this.props.bookId > 0) {
      this.props.findOneBook(this.props.bookId)
    } else {
      this.props.showBooks();
    }
  }

  renderBooksAll() {
    return (
      <div className="book-list">
        <h2>Lista de libros</h2>
        <ul>
          { this.props.books.map((book, i)=> {
            return (
              <li key={i}>
                <b>{book.attributes.title}</b>
                <br></br>
                <small>{book.attributes.author}</small>
                <br></br>
                <small>{book.attributes.year}</small>
                <br></br>
                <Link to={'/books/' + book.id}>Ver más</Link>
              </li>      
            )  
          }) }          
        </ul>
      </div>
    )
  }

  renderBookFind(book) {
    if (book.length !== 0) {
      return (
        <div className="book-show">
          <b>{book.attributes.title}</b>
          <br></br>
          <small>{book.attributes.author}</small>
          <br></br>
          <small>{book.attributes.year}</small>
        </div>
      );
    } else {
      return (
        <b>Cargando...</b>
      );
    }
    
  }

  // RENDER
  render() {
    const { bookId, book } = this.props;
    return (
      <div className="Books container">        
        { bookId > 0 ? this.renderBookFind(book) : this.renderBooksAll() }    
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.handlerBooks.all,
    book: state.handlerBooks.findOne
  }
}

export default connect(mapStateToProps, { showBooks,  findOneBook})(Books);
