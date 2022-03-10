import React, {useState} from 'react';
import { Outlet } from 'react-router-dom';


import { onAuthStateChanged } from 'firebase/auth';
import { auth } from 'libs/firebase'
 
import {AppBar} from '../../components/appbar'
import SideBar from 'components/sidebar/Sidebar';
import {DashBoardPageStyles} from "./styles"

import { useNavigate } from 'react-router';
import AllProductsPanel, {Panels} from 'components/panels/Panels';

function DashBoardPage  (props){
    const [isUser, setIsUser] = useState(false);
    const navigator = useNavigate();
        onAuthStateChanged(auth, (user)=>{
            if(user) {
                setIsUser(true);
            } else {
                setIsUser(false);
                navigator('/');
            }
        });

        if(isUser){
            return (
            <>
                <AppBar/>
                <DashBoardPageStyles>
                    <SideBar/>
                    <Outlet/>
                    <AllProductsPanel/>
                </DashBoardPageStyles>
            </>
            )
        } else {
            return null
        }
}


export default DashBoardPage