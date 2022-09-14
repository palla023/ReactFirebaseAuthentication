import React from 'react'
import {auth} from './firebase';

const Home = ({presentUser}) => {
    return (
        <div>
           <h1> Welcome {presentUser.email}</h1>
           {/* By using auth Function we have Used Signout() that should be Imported from fireBase */}
           <button onClick={() => auth.signOut()}>Sign Out</button>
        </div>
        
    )
}

export default Home
