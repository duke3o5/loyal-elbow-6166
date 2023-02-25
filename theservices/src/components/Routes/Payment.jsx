import { Button, Checkbox, Heading } from '@chakra-ui/react'
import React from 'react';
import '../styles/Checkout.css';

export default function Payment() {
    return (
        <div>
            <Heading>Payment to complete your order</Heading>
            <div>
                <Button className='payBtn'>Cash on delievry</Button>
                <Button className='payBtn'>Online Payment</Button>

            </div>
        </div>
    )
}
