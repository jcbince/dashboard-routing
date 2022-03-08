import styled from 'styled-components';

const LoginPageStyles = styled.section`
max-width: 400px;
margin: 2rem auto;
header{
	margin-bottom: 2rem;
}
h1{
	font-size:2rem;
}

.Toastify__toast {
	background-color: white;
}

.Toastify__progress-bar--error {
	background-color: red;
}


`

const FormControl = styled.div`
margin-bottom: 1.5rem;
`

export {LoginPageStyles, FormControl}