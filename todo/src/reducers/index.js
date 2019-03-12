// Dependencies
import { combineReducers } from 'redux';

// Apps Reducers
import { handlerBooks } from '../containers/Books/reducer';


const rootReducer = combineReducers({
  handlerBooks: handlerBooks
});

export default rootReducer;
