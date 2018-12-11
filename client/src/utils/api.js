import axios from 'axios';

const http = axios.create({
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});

const https = axios.create({
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});

https.interceptors.request.use(config => {
  const method = config.method.toUpperCase();
  if (method !== 'OPTIONS' && method !== 'GET') {
    config.headers = {
      ...config.headers,
      'X-CSRF-TOKEN': localStorage.csrf
    };
  }
  return config;
});

https.interceptors.response.use(null, error => {
  if (error.response && error.response.config && error.response.status === 401) {
    console.log('refreshing')
    // In case 401 is caused by expired access cookie - we'll do refresh request
    return http.post('/refresh', {}, { headers: { 'X-CSRF-TOKEN': localStorage.csrf } })
      .then(response => {
        const { csrf } = response.data;
        localStorage.setItem('csrf', csrf);
        localStorage.setItem('isAuthenticated', true);
        // And after successful refresh - repeat the original request
        const retryConfig = error.response.config;
        retryConfig.headers['X-CSRF-TOKEN'] = csrf;
        return http.request(retryConfig);
      })
      .catch(error => {
        console.log(error)
        localStorage.removeItem('csrf');
        localStorage.removeItem('isAuthenticated');
        return Promise.reject(error)
      });
  } else {
    return Promise.reject(error)
  }
});


export {
  http,
  https
}