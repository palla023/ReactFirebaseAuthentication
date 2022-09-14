import React, { useEffect, useState } from 'react'
import { auth } from './firebase';
import UserAuth from './UserAuth';
import Home from './Home';

const App = () => {
  //if we want to send the data to another component , the data should be stored in a variable
  //At present who is the User , that user can be stored in a varibale
  const [presentUser, setPresentUser] = useState(null);

  //check if the page is in authenticated or not , that should be used with useEffect 
        useEffect(() => {
          auth.onAuthStateChanged(user => {         //if user was logged in, we can show the details
            if (user) {
              setPresentUser({
                uid: user?.uid,
                email: user?.email
              })
            }
            else {
              setPresentUser(null);  //once the User click on logout(), particular user should be assigned to null
            }
          })
        }, [])
  return (
    <div>
      <center>
        {/* check the present user is there or not, if there send that user to another Component and if not show the UserAuth component (Form page)*/}
        {presentUser ? <Home presentUser={presentUser} /> : <UserAuth />}
      </center>
    </div>
  )
}

export default App
