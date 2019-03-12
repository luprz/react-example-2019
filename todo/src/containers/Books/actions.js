import BooksApi from './api'
export const SHOW_BOOKS = 'SHOW_BOOKS';
export const FIND_ONE_BOOK = 'FIND_ONE_BOOK';

export function showBooks() {
  return (dispatch, getState) => {
    BooksApi.loadAllBooks()
      .then((response) => {
        dispatch( { type: SHOW_BOOKS, payload: response.data.data } ) 
      }) 
  }
}

export function findOneBook(bookId) {
  return (dispatch, getState) => {
    BooksApi.findBook(bookId)
      .then((response) => {
        dispatch( { type: FIND_ONE_BOOK, payload: response.data.data } ) 
      }) 
  }
}