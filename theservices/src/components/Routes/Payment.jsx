import { Button, Checkbox, Heading, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Checkout.css';


export default function Payment() {
    const [pay, setPay] = useState(false);
    const navigate= useNavigate();

    const handlePage=(value)=>{
        navigate(`${value}`);
    }


    return (
        <div>
            <Heading>Payment to complete your order</Heading>
            <div>
                <Button className='payBtn' onClick={() => setPay(true)}>Online Payment</Button>
                <Button className='payBtn' disabled={pay == false} onClick={() => setPay(false)}>Cash on delievry</Button>
            </div>
            {pay ?
                <div style={{width:'70%', margin:'auto', marginTop:'2%'}}>
                    <Input className='inputTag' placeholder='Name on Card' required/>
                    <Input className='inputTag' placeholder='Card Number' required
                        minlength="12" maxlength="12" size="12" />
                    <Input className='inputTag' placeholder='CCV'  required
                        minlength="0" maxlength="3" size="3" />
                    <Input className='inputTag' placeholder='Expiry Date' type={'date'} required/>
                    <Button className='payBtn' onClick={()=>handlePage('/LastPage')}>Pay</Button>
                </div>

                :
                <Button className='payBtn' onClick={()=>handlePage('/LastPage')}>Pay on Delievery</Button>

            }
        </div>
    )
}
