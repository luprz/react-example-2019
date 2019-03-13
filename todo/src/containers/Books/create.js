import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { createOneBook } from './actions'
import { Link } from 'react-router-dom'

class CreateBooks extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      author: '',
      description: '',
      year: ''
      
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const result = this.props.createOneBook(this.state)
    console.log(result)
  }
  
  // RENDER
  render() {
    return (
      <div className="createBook container">        
        <h1>New book Form</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name: 
            <input type="text" name="title" onChange={this.handleChange}/>
          </label>
          <br/>
          <label>
            Author: 
            <input type="text" name="author" onChange={this.handleChange} />
          </label>
          <br/>
          <label>
            Description: 
            <input type="text" name="description" onChange={this.handleChange}/>
          </label>
          <br/>
          <label>
            Year: 
            <input type="text" name="year" onChange={this.handleChange}/>
          </label>
          <br/>
          <input type="submit" value="Create Book" />
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.handlerBooks.createBook,
  }
}

export default connect(mapStateToProps, { createOneBook })(CreateBooks);
