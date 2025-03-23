/*eslint-disable*/

import 'core-js/stable';
import 'regenerator-runtime';
import axios from 'axios';

import { showAlert } from './alerts';

const loginBtn = document.querySelector('.form');

export const login = async (email, password) => {
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:8000/api/v1/users/login',
      data: {
        email,
        password,
      },
    });
    console.log('first', res);
    if (res.data.status === 'success') {
      showAlert('success', 'Logged in successfullty');
      window.setTimeout(() => {
        location.assign('/');
      }, 500);
    }
  } catch (error) {
    showAlert('error', error.response.data.message);
  }
};
