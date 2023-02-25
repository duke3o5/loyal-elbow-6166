import React from 'react'
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Heading } from '@chakra-ui/react';
import { Text, Image, Button } from '@chakra-ui/react';
import './styles/SalonforWomen.css';
import Responsive from './Slider';


export const SingleProductPage = () => {
    const [el, setData] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();

    const handlePage=(value)=>{
        // setPage(true);

        navigate(`${value}`)
    }

console.log(id)
    const getData = () => {
        axios.get(`http://localhost:8080/data/${id}`).then((res) => setData(res.data));
    }

    useEffect(() => {
        getData()
    }, []);
    return (
        <>

            <div className="box">
                    <div className="mainDiv">
                        <div>
                            <Heading fontSize={'3xl'}>{el.merchantName}</Heading>

                            <Text color={'grey'}>{el.Category}</Text>

                            <Text fontSize={'xl'}>{"Address: " + el.merchantCity + ' , ' + el.merchantLocation}</Text>

                            <Text fontSize={'2xl'}>{'Price' + ' : ' + el.price + ' Rs.'}</Text>

                            
                                <Button className="bookNowButton" onClick={(e)=>handlePage('/Checkout')}>Book this Service</Button>
                            


                            <Text color={'grey'} fontSize={'sm'}>{'Distance : ' + el.distanceFromUser}</Text>
                        </div>
                        <div>
                            <Image src={el.imageUrl}
                                borderRadius={'5px'} />

                        </div>
                    </div>

                    {/* <Responsive images={el.images} /> */}
                </div>

        </>
    )
}
