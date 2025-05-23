import axios from 'axios';
import { setDonors, setReceivers } from '../Redux/userinfoslice';
import { connectWebSocket } from '../RealTime/socket';
/*login api. unfinished*/
export const loginUser = async (loginData,navigator) => {
  try 
  {
    const response = await axios.post('https://api.chicken-fish.site/api/login', loginData);
    if (response.data === 'Please register first') {
    alert('Please register first'); return}
    localStorage.setItem('usernameforreact',response.data.usernameforreact)
    connectWebSocket(response.data.usernameforreact); 
    navigator('/userdashboard/content')
    console.log('Login Successful:', response.data); // Handle the token or success message
    return response.data;
    } 
  catch (error) 
  {
  if (error.response && error.response.data === 'Please register first') {
    alert('Please register first');
  } else if (error.response && error.response.data === 'incorrect password') {
    alert('Incorrect password. Try again.');
  } else {
    console.error('Login Failed:', error.response ? error.response.data : error.message);
    alert('An unexpected error occurred. Please try again later.');
  }
  throw error; // Re-throw for further handling if needed
  }

};



/*register api. unfinished*/

export const registerUser = async (registerData,navigator) => {
  try {
    const response = await axios.post('https://api.chicken-fish.site/api/register', registerData);
    alert('registered successfully,login now')
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
    const response = await axios.put(
      'https://api.chicken-fish.site/api/getstats/needcash',
      { amount }, // Include the amount in the request body
      {
        withCredentials: true
      }
    );
    console.log('Active Users:', response); // Logs the list of users
    dispatch(setReceivers(response.data));
    localStorage.setItem('matchescash', 'true');

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
    const response = await axios.put(
      'https://api.chicken-fish.site/api/getstats/needdigital',
      { amount }, // Include the amount in the request body
      {
        withCredentials: true
      }
    );
    console.log('Active Users:', response); 
    dispatch(setDonors(response.data));
    localStorage.setItem('matchescash', 'false');
    navigator('/userdashboard/matches/false');
    return response.data;
  } 
  catch (error) { // ✅  
    console.error('Error:', error.response?.data || error.message);
    throw error;
                }
};


export const userlogout = async (navigator) => {
  try {
    await axios.put(
      'https://api.chicken-fish.site/api/logout', // API endpoint
      {}, // Empty body for a PUT request
      {
        withCredentials: true 
      }
    );
    console.log('User logged out successfully');
    navigator('/home')
  } catch (error) {
    console.error('Error during logout:', error);
  }
};









