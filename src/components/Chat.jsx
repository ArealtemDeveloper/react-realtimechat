import React from 'react'
import { useContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import styled from 'styled-components'
import { Context } from '..'
import { FiUpload } from 'react-icons/fi'
import { useState } from 'react'
import { collection, addDoc, getDocs, orderBy, serverTimestamp, query} from 'firebase/firestore'
import { useEffect } from 'react'


const Chat = () => {

 const {auth, firestore} = useContext(Context)
 const [user] = useAuthState(auth)

 const [value, setValue] = useState('')
 const [data, setData] = useState([])
 
 const dbRef = collection(firestore, 'messages')


 const sendMessage = async () => {
    await addDoc(dbRef, {
        uid: user.uid,
        displayName: user.displayName,
        photoUrl: user.photoURL,
        text: value,
        createdAt: serverTimestamp(),
    })
    setValue('')
 }

 const getMessages = async () => {
    let array = []
    try {
        let {docs} = await getDocs(dbRef, orderBy('createdAt'))
        docs.map(item => {
            const obj = item.data()
            array.push(obj)
            setData([...array])
        })
    } catch (e) {
        console.log(e)
    }
    console.log(array)
 }


 useEffect(() => {
     getMessages()
 },[])

 const complex = () => {
    sendMessage()
    getMessages()
 }


  return (
    <Wrapper>
        <Messages>
           {data.map(item => (
            <Message style={{background: user.uid === item.uid ? '#405de6' : '#494949', 
            marginLeft: user.uid === item.uid ? 'auto' : '1rem'}
            
            } key={Math.random() * 100}>
             <h4>{item.displayName}</h4>
             <p>{item.text}</p>
            </Message>
           ))}
        </Messages>
        <Form>
            <Input  value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder='Введите сообщение...' />
            <Btn onClick={complex}><FiUpload style={{fontSize: '1.2rem', color: 'white'}}/></Btn>
        </Form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    height: 100vh;
    width: 100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Message = styled.div`
    margin: 1rem;
    width: 10rem;
    border: 1px solid #202020;
    border-radius: 2%;
    color: #fff;
`

const Messages = styled.div`
    height: 30rem;
    width: 60rem;
    border: 2px solid #f2f3f4;
    border-radius: 1%;
    overflow: scroll;
`

const Form = styled.div`
    

`

const Input = styled.input`
    margin: 2rem 1rem;
    outline: none;
    height: 2.5rem;
    width: 60vw;
    border: 2px solid #f2f3f4;
    border-radius: 2%;
    font-size: 1rem;
`

const Btn = styled.button`
    border: none;
    background-color: #405de6;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    cursor: pointer;

    &:active {
        opacity: 0.9;
    }
`



export default Chat