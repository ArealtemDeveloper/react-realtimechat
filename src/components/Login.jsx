import React from 'react'
import styled from 'styled-components'
import { FcGoogle } from 'react-icons/fc'
import { useContext } from 'react'
import { Context } from '..'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'


const Login = () => {

    const { auth } = useContext(Context)

    const login = async () => {
        const provider =  new GoogleAuthProvider();
        const { user } = await signInWithPopup(auth, provider)
        console.log(user)
    }

  return (
    <Sdiv>
        <Wrapper>
        <FcGoogle style={{fontSize: '2rem'}}/>   
        <Btn onClick={login} >Войти с помощью Google</Btn>
        </Wrapper>
    </Sdiv>
        
    
  )
}

const Sdiv = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
`

const Wrapper = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
    border: 1px solid rgba(0,0,0,0.7);
    border-radius: 5px;
    width: 30rem;
    height: 10rem;
    background-color: #f2f3f4; 
`
const Btn = styled.button`
    margin: 1rem;
    padding: 0.5rem;
    width: 20rem;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    border: none;
    border: 1px solid rgba(0,0,0,0.7);
    border-radius: 2%;
    background-color: #405de6;
    transition: 0.2s;

    &:hover {
        transform: scale(1.02)
    }
`

export default Login