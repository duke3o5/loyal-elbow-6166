import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Heading } from '@chakra-ui/react';
import { Text, Image } from '@chakra-ui/react';
import './styles/SalonforWomen.css';
import Responsive from './Slider';


export const SingleProductPage = () => {
    const [el, setData] = useState({});
    const {id} = useParams();

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

                            
                                <button className="bookNowButton">Book this Service</button>
                            


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
