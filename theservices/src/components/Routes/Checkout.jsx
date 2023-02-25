import { Button, Checkbox, Heading, Input,Text } from '@chakra-ui/react'
import React from 'react'
import '../styles/Checkout.css';
import { useNavigate } from 'react-router-dom';


export default function Checkout () {
    const naviagte=useNavigate();

    const handlePage=(value)=>{
        naviagte(`${value}`);
    }
  return (<>
    <Heading>Please fill the details</Heading>
    <div id='addDiv'>
        <Input className='inputTag' placeholder='Full Name' required/>
        <Input className='inputTag' placeholder='Contact Number' required/>
        <Input className='inputTag' placeholder='Email Id' required/>
        <Input className='inputTag' placeholder='House Number/Address' required/>
        <Input className='inputTag' placeholder='Landmark' required/>
        <Input className='inputTag' placeholder='City' required/>
        <Input className='inputTag' placeholder='State' required/>
        <Input className='inputTag' placeholder='Contact Number' required/>
    </div>

    <Button className='payBtn' onClick={()=>handlePage('/Payment')}>Proceed to Payment</Button>

    {/* <div id='paymentDiv'>
            <Text fontSize={'2xl'}>Payment Method</Text>
            <Checkbox>Cash on delievery</Checkbox>
        </div> */}
    </>
  )
}
