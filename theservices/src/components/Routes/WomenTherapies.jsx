import { Heading, Text, Image, Button, Input, Select } from "@chakra-ui/react";
import axios from 'axios';
import { useState, useEffect } from 'react';
import '../styles/SalonforWomen.css';
// import Slider from '../Slider';
import Responsive from "../Slider";
import { Link } from "react-router-dom";

export default function WomenTherapies () {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [sort, setSort] = useState('price');
    const [range, setRange] = useState('asc');

    const getData = () => {
        axios.get(`http://localhost:8080/data?Category=Salon&_limit=3&_page=${page}Category=Spa&_sort=${sort}&_order=${range}`).then((res) => setData(res.data));
    }

    useEffect(() => {
        getData()
    }, [page, sort, range]);

    const handleFilter=(value)=>{
        setSort(value);
    }

    const handleRange=(value)=>{
        setRange(value);
    }

    return (
        <>
            <Heading className="pageHeading">Salon For Women</Heading>
            <div className="sortDiv">
                <Heading fontSize={'md'}>Sort By</Heading>
                <Select width={'20%'} border={'1px solid black'} onClick={(e)=>handleFilter(e.target.value)}>
                    <option value={'price'}>Price</option>
                    <option value={'distance'}>Distance</option>
                </Select>
                <Select width={'20%'} border={'1px solid black'} onClick={(e)=>handleRange(e.target.value)}>
                    <option value={'asc'}>Low to High</option>
                    <option value={'desc'}>High to Low</option>
                </Select>
            </div>

            {data && data.map((el) => (
                <div className="box" key={el.id}>
                    <div className="mainDiv">
                        <div>
                            <Heading fontSize={'3xl'}>{el.merchantName}</Heading>

                            <Text color={'grey'}>{el.Category}</Text>

                            <Text fontSize={'xl'}>{"Address: " + el.merchantCity + ' , ' + el.merchantLocation}</Text>

                            <Text fontSize={'2xl'}>{'Price' + ' : ' + el.price + ' Rs.'}</Text>

                            <Link to={`/WomenTherapies/${el.id}`}>
                                <Button className="bookNowButton">Book this Service</Button>
                            </Link>


                            <Text color={'grey'} fontSize={'sm'}>{'Distance : ' + el.distanceFromUser}</Text>
                        </div>
                        <div>
                            <Image src={el.imageUrl}
                                borderRadius={'5px'} />

                        </div>
                    </div>

                    <Responsive images={el.images} />
                </div>


            ))}
            <div>
                <Button disabled={page == 1} onClick={() => setPage(page - 1)} className="bookNowButton">Previous</Button>
                <Button fontSize={'3xl'}>{page}</Button>
                <Button onClick={() => setPage(page + 1)} className="bookNowButton" disabled={data.length == page}>Next</Button>
            </div>
        </>
    )
}

