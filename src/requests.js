const BASE_URL = `http://localhost:3000/api/v1`;

//These are all the AJAX fetch requests that are sending http requests to our api to get
//the data.  These requests will be sent to the above url and use the Hacky sign in details
//in src/components/app/index.js

export const Session = {
  create(params) {
    // params should look like { email: 'johnsnow@gmail.com', password: 'supersecret' }
    return fetch(`${BASE_URL}/session`, {
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include', // allows cookies to be recieved and sent from this request
      method: 'POST',
      body: JSON.stringify(params)
    }).then((res) => {
      return res.json();
    })
  },
  destroy(){
    return fetch(`${BASE_URL}/session`, {
      method: 'Delete',
      credentials: 'include'
    }).then(res => res.json())
  }
}

export const User = {
  current() {
    return fetch(`${BASE_URL}/users/current`, {
      credentials: 'include',
    }).then(res => res.json())
  },
  create(params) {
    return fetch(`${BASE_URL}/users`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: params })
    }).then(res => res.json())
  }
}

export const Product = {
    index() {
      return fetch(`${BASE_URL}/products`)
        .then(res => {
          console.log(res)
          return res.json();
        })
    },
    create(params) {
      return fetch(`${BASE_URL}/products`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
      }).then(res => res.json())
    },
    show(id) {
      return fetch(`${BASE_URL}/products/${id}`)
        .then(res => res.json())
    }
}

