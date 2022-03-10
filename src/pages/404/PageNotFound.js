import React, {useState} from 'react';

 import { onAuthStateChanged } from 'firebase/auth';
 import { auth } from 'libs/firebase';

 import {Link} from "react-router-dom"



 function PageNotFound  (props){
    const [isUser, setIsUser] = useState(false);
    
    onAuthStateChanged(auth, (user)=>{
        if (user){
            setIsUser(true)
        } else {
            setIsUser(false)
        }
    })
    return( 
         <>
          <aside>
            <header>
                <h1>Page Not Found | 404 | NOT HERE</h1>
                {
                    isUser? <Link to='/dashboard'>Back to Safety</Link> :  <Link to='/'>Logout</Link>
                }
            </header>
          </aside>
         
         </>
     )
 }
 
 export default PageNotFound 