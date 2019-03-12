// Dependencies
import React, { Component } from 'react';
import '../assets/stylesheets/Books.css';

// Components
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import BooksContainer from '../../containers/Books';

class Show extends Component {

  render() {
    return (
      <div className="ShowBooks">
        <Jumbotron title="Show Book" parraph="true"/>
        <BooksContainer bookId={this.props.match.params.id}/>
      </div>
    );
  }
}

export default Show;
