import { Heading, Text, Image } from "@chakra-ui/react";
import axios from 'axios';
import {useState, useEffect} from 'react';
import '../styles/SalonforWomen.css';


export default function Women(){
const [data, setData]= useState([]); 

    const getData=()=>{
        axios.get(`http://localhost:8080/data?_limit=2`).then((res)=>setData(res.data));
    }

    useEffect(()=>{
        getData()
    },[]);

    return(
        <>
        <Heading>Women Page</Heading>
        {data&& data.map((el)=>(
            <div className="mainDiv">
                <div>
                <Heading fontSize={'2xl'}>{el.merchantName}</Heading>
                <Text>{el.Category}</Text>
                <Text>{el.merchantLocation}</Text>
                </div>
                <Image src={el.images[1]}
                borderRadius={'10px'} width={'50%'}/>
            </div>
            
        ))}
        </>
    )
}