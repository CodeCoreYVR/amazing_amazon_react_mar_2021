// import React from 'react';
// import { Session } from '../../requests'

// const SignInPage =({handleSubmit, history})=>{
//     function onSubmit(event){
//         event.preventDefault();
//         const {currentTarget}=event;
//         const formData= new FormData(currentTarget);
//         const formValues={
//             email: formData.get('email'),
//             password: formData.get('password')
//         }
//         handleSubmit(formValues);
//         history.push('/products');

//     }
//     return(
//         <main>
//         <h1>Sign In</h1>
//         <form onSubmit={onSubmit}>
//             <div>
//                 <label htmlFor='email'>Email</label>
//                 <input id='email' type='email' name='email' />
//             </div>
//             <div>
//                 <label htmlFor='password'>Password</label>
//                 <input id='password' type='password' name='password' />
//             </div>
//             <input type='submit' value='Sign In' />
//         </form>
//         </main>
//     )
// }
// export default SignInPage;

import React from 'react'
import { Session } from '../requests'

function SignInPage(props) {
  const { onSignIn } = props

  function handleSubmit(event) {
    event.preventDefault()
    const {currentTarget} = event
    const formData = new FormData(currentTarget)
    const params = {
      email: formData.get('email'),
      password: formData.get('password'),
    }
    Session.create(params).then(data => {
      if (data.id) {
        onSignIn()
        // Naviagte to the index page from the browser
        // We can "push" on history to manipulate the browser
        // and direct our user to any page in our app
        props.history.push('/products')
      }
    })
  }

  return (
    <main>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <input type="submit" value="Sign In" />
      </form>
    </main>
  )
}

export default SignInPage

