import React from 'react';
import { signOut } from 'firebase/auth';
import {auth} from 'libs/firebase';
import { Button } from "ui/buttons"; 
import {SideBarStyles} from './styles'
import ProductOptions from './ProductOptions';



function SideBar (props) {

	function onLogoutRequest(e) {
		signOut(auth);
	}


	return (
				<SideBarStyles>
					
					<header>
						<h1>SideBar Dashboard Styles</h1>
					</header>
					<ProductOptions/>
					
					<Button onClick={onLogoutRequest}
						padding="0.125rem 0.5rem"
						fs="12px"
						margin="4rem 0"
						width="max-content">Logout </Button>
						
				</SideBarStyles>
	)
}

export default SideBar;