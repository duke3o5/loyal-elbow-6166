import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Text } from '@chakra-ui/react';
import '../styles/Checkout.css';



export const LastPage = () => {
    const [count, setCount] = useState(5);
    const navigate = useNavigate();


    const handlePage=(value)=>{
        navigate(`${value}`)
    }

    // useEffect(()=>{
    //     goHome();
    // },[])


  return (
    <div>
        <Text fontSize={'2xl'}>Thank you for choosing The Service</Text>
        <Button className='payBtn' onClick={()=>handlePage('/')}>Return to Home Page</Button>
    </div>
  )
}
