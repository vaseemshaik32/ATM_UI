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
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Content } from './content.jsx';
import TandC from './t & c.jsx';
import { connectWebSocket } from './socket'; // Import WebSocket utility

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

window.onbeforeunload = () => {
    // Clear localStorage
    localStorage.clear();
    console.log('LocalStorage cleared on window close or reload.');
};


const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/register', element: <Register /> },
  { path: '/terms', element: <TandC /> },
  {
    path: '/userdashboard',
    element: <UserDashboard />, // Parent route with Navbar
    children: [
      { path: '/userdashboard/content', element: <Content /> },
      { path: '/userdashboard/chats', element: <Chats /> },
      { path: '/userdashboard/matches/:cash', element: <Matches /> },
      { path: '/userdashboard/chatwindow/:nameofmatch', element: <ChatWindow /> },
      { path: '/userdashboard/requests', element: <Requests /> },
    ],
  },
  { path: '*', element: <NotFound /> },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
