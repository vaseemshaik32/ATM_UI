import axios from 'axios';
import { setDonors, setReceivers } from './userinfoslice';
import { connectWebSocket } from './socket';
/*login api. unfinished*/
export const loginUser = async (loginData,navigator) => {
  try {
    const response = await axios.post('https://backend-gar4.onrender.com/api/login', loginData);
    localStorage.setItem('logintoken', response.data.token);
    localStorage.setItem('usernameforreact',response.data.usernameforreact)
    connectWebSocket(response.data.usernameforreact,response.data.token); 
    navigator('/userdashboard/content')
    console.log('Login Successful:', response.data); // Handle the token or success message
    return response.data;
  } catch (error) {
    console.error('Login Failed:', error.response ? error.response.data : error.message);
    throw error;
  }
};



/*register api. unfinished*/

export const registerUser = async (registerData,navigator) => {
  try {
    const response = await axios.post('https://backend-gar4.onrender.com/api/register', registerData);
    navigator('/')
    console.log('Registration Successful:', response.data); // Handle success message
    return response.data;
  } catch (error) {
    console.error('Registration Failed:', error.response ? error.response.data : error.message);
    throw error;
  }
};


/*need cash unfinished*/

export const getcashguys = async (navigator, dispatch, amount) => {
  try {
    const token = localStorage.getItem('logintoken');
    const response = await axios.put(
      'https://backend-gar4.onrender.com/api/getstats/needcash',
      { amount }, // Include the amount in the request body
      {
        headers: {
          Authorization: `Bearer ${token}`, // Send the token in the Authorization header
        },
      }
    );
    console.log('Active Users:', response); // Logs the list of users
    dispatch(setReceivers(response.data));
    navigator('/userdashboard/matches/true');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch active users:', error.response ? error.response.data : error.message);
    throw error;
  }
};


/*need digital unfinished*/
export const getdigitalguys = async (navigator, dispatch, amount) => {
  try {
    const token = localStorage.getItem('logintoken');
    const response = await axios.put(
      'https://backend-gar4.onrender.com/api/getstats/needdigital',
      { amount }, // Include the amount in the request body
      {
        headers: {
          Authorization: `Bearer ${token}`, // Send the token in the Authorization header
        },
      }
    );
    console.log('Active Users:', response); 
    dispatch(setDonors(response.data));
    navigator('/userdashboard/matches/false');
    return response.data;
  } catch (response) {
    console.log(response.error)
  }
};


export const userlogout = async (navigator) => {
  const token = localStorage.getItem('logintoken'); // Assuming you store the token in localStorage
  try {
    axios.put(
      'https://backend-gar4.onrender.com/api/logout', // API endpoint
      {}, // Empty body for a PUT request
      {
        headers: {
          Authorization: `Bearer ${token}`, // Send the token in the Authorization header
        },
      }
    );
    console.log('User logged out successfully');
    navigator('/home')
  } catch (error) {
    console.error('Error during logout:', error);
  }
};









