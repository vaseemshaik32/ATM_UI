import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import HomePage from './home.jsx';
import Register from './Register.jsx';
import UserDashboard from './dashboard.jsx';
import Chats from './chats.jsx';
import Matches from './matches.jsx';
import NotFound from './notfound.jsx';
import ChatWindow from './chatwindow.jsx';
import Requests from './requests.jsx';
import { Provider } from 'react-redux'; // Import Redux Provider
import store from './store';
import { HashRouter, Routes, Route } from 'react-router-dom'; // Use HashRouter instead of BrowserRouter
import { Content } from './content.jsx';
import TandC from './t & c.jsx';
import { connectWebSocket } from './socket'; // Import WebSocket utility

// WebSocket reconnection logic
window.onload = () => {
    const username = localStorage.getItem('usernameforreact');
    const token = localStorage.getItem('logintoken');

    if (username && token) {
        console.log('Attempting WebSocket reconnection...');
        connectWebSocket(username, token); // Call the function with stored values
    } else {
        console.log('User credentials not found in localStorage. Cannot reconnect WebSocket.');
    }
};

// React Router configuration with HashRouter
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/terms" element={<TandC />} />
                    <Route path="/userdashboard" element={<UserDashboard />}>
                        <Route path="content" element={<Content />} />
                        <Route path="chats" element={<Chats />} />
                        <Route path="matches/:cash" element={<Matches />} />
                        <Route path="chatwindow/:nameofmatch" element={<ChatWindow />} />
                        <Route path="requests" element={<Requests />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </HashRouter>
        </Provider>
    </StrictMode>
);
