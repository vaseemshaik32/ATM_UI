import { configureStore } from '@reduxjs/toolkit';
import messageReducer from './messageslice'
import userinfoReducer from './userinfoslice'
import requestsReducer from './reqslice';
import chatsReducer from './chatsslice';

const store = configureStore({
    reducer: {
        messages: messageReducer, // Manages the message state
        userinfo: userinfoReducer, // Manages the user information state (donors/receivers)
        req:requestsReducer,
        chts:chatsReducer
    }
});

export default store;
