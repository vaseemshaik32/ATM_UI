import { configureStore } from '@reduxjs/toolkit';
import messageReducer from './messageslice';
import userinfoReducer from './userinfoslice';
import requestsReducer from './reqslice';
import chatsReducer from './chatsslice';

// Utility functions for localStorage management
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (error) {
    console.error('Error loading state from localStorage:', error);
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reduxState', serializedState);
  } catch (error) {
    console.error('Error saving state to localStorage:', error);
  }
};

// Load persisted state from localStorage
const preloadedState = loadState();

const store = configureStore({
  reducer: {
    messages: messageReducer, // Manages the message state
    userinfo: userinfoReducer, // Manages the user information state (donors/receivers)
    req: requestsReducer,
    chts: chatsReducer
  },
  preloadedState, // Initialize Redux store with persisted state
});

// Save Redux state to localStorage whenever it changes
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
