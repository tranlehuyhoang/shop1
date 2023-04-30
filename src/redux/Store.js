import { createStore } from 'redux';
import reducer from './Action';

const store = createStore(reducer);

export default store;