import axios from 'axios';
import { apiEndpoint } from '../../config/api';

const API_URL = apiEndpoint + "books/"

class BooksApi {

  static loadAllBooks() {
    return axios.get(API_URL)
  }

  static findBook(bookId) {
    return axios.get(API_URL + bookId)
  }

  static createBook(book) {
    return axios.post(API_URL, { book })
  }
}

export default BooksApi;