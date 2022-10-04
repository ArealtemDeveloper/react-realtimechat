import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useContext } from 'react'
import { Context } from '..'

const Navbar = () => {

    const { auth } = useContext(Context)
    const [user] = useAuthState(auth)

  return (
    <Nav>
        <Wrapper>
            <BsFillChatDotsFill style={{color: '#f2f3f4', marginRight: '1rem'}}/>
            <h3 style={{color: '#f2f3f4'}}>Real-Time Chat</h3>
            {user ? 
            <Btn onClick={() => auth.signOut()}>Выйти</Btn> 
            : 
            <Link to='/login'>
                <Btn>Логин</Btn>
            </Link>
            }
        </Wrapper>
    </Nav>
  )
}

const Nav = styled.div`
  width: 100vw;
  height: 50px;
  background-color: #405de6;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
const Btn = styled.button`
    margin: 1rem;
    padding: 0.5rem;
    width: 5rem;
    cursor: pointer;
    font-size: 0.8rem;
    font-weight: 500;
    border: none;
    border: 1px solid #202020;
    border-radius: 2%;
    background-color: #f2f3f4;
    transition: 0.2s;

`

export default Navbar