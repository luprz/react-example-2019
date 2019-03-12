import { SHOW_BOOKS, FIND_ONE_BOOK } from './actions'

const initialState = {
  all: [],
  findOne: []
}

export function handlerBooks(state = initialState, action) {
  switch(action.type) {
    case SHOW_BOOKS:
      return Object.assign({}, state, { all: action.payload })
    case FIND_ONE_BOOK:
      return Object.assign({}, state, { findOne: action.payload })
    default:
      return state
  }
}