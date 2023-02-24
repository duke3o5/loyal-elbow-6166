import { Button, Center, option, Text, Flex, Input, Select, Stack, Heading, Avatar } from '@chakra-ui/react'
import '../styles/Home.css';
import { Card, CardHeader, Image, Divider, ButtonGroup, CardBody, CardFooter, StackDivider, Box } from '@chakra-ui/react';
import { useAuth0 } from "@auth0/auth0-react";
import { Link, Navigate, useNavigate  } from 'react-router-dom';
import { useState } from 'react';


export default function Home() {
    const { loginWithRedirect, logout } = useAuth0();
    const { user, isAuthenticated, isLoading } = useAuth0();
    const [page, setPage] = useState(false);
    const navigate = useNavigate();

    const handlePage=(value)=>{
        setPage(true);

        navigate(`${value}`)
        // return(
        // <Navigate to=`/${value}`/>
        // )
    }

    const banner = {
        width: '100%',
    }
    const bannerImage = 'https://www.slide-lok.com/blog/images/when-to-paint-your-house/house-painting-tips.jpg';

    return (
        <>
            {/* <div >
                <img style={banner} src={bannerImage} alt='Home Banner' />
            </div> */}


            <div style={{ backgroundImage: "url(https://www.slide-lok.com/blog/images/when-to-paint-your-house/house-painting-tips.jpg)", height: '500px' }}>
               <div style={{paddingTop:'2%'}}>
               <Center color={'black'}>
                    {isAuthenticated && <Text fontSize={'xl'}>Welcome back {user.name} !</Text>}
                </Center>
                <Flex>
                    <Heading color={'black'} textAlign={'center'} margin={'auto'} >
                        Home services, on demand
                    </Heading>
                </Flex>
               </div>
                <Flex>
                    <Select color={'black'} bg={'whiteAlpha.700'} width='11%' placeholder='Choose City' marginTop={'8%'} marginLeft='16%' marginRight='-12%'>
                        <option>Choose City</option>
                        <option>Meerut</option>
                        <option>Delhi</option>
                        <option>Ghaziabad</option>
                        <option>Noida</option>
                        <option>Dehradoon</option>
                        <option>Banglore</option>
                        <option>Mumbai</option>

                    </Select>
                    <Input _placeholder={{ opacity: 1, color: 'gray.500' }} bg={'whiteAlpha.700'} width='60%' margin={'auto'} marginTop={'8%'} placeholder='Search for Services' />
                </Flex>
            </div>


            <div className='homeCategory'>
                <div className='homeCategory-innerDiv'
                 as='a' href='/SalonforWomen' value='SalonforWomen' onClick={(e)=>handlePage("SalonforWomen")}>

                    <Avatar size={'sm'} src='https://cdn-icons-png.flaticon.com/512/6029/6029106.png' />
                    <h2>Salon For Women</h2>

                </div>
                <div className='homeCategory-innerDiv' onClick={(e)=>handlePage("SalonforWomen")}>
                    <Avatar size={'sm'} src='https://cdn-icons-png.flaticon.com/512/6029/6029080.png' />
                    <h2>Hair, Skin & Nails</h2>

                </div>
                <div className='homeCategory-innerDiv' as='a' href='/WomenTherapies' onClick={(e)=>handlePage("WomenTherapies")}>
                    <Avatar size={'sm'} src='https://cdn-icons-png.flaticon.com/512/8686/8686107.png' />
                    <h2>Women's Therapies</h2>

                </div>
                <div className='homeCategory-innerDiv'>
                    <Avatar size={'sm'} src='https://cdn-icons-png.flaticon.com/512/8360/8360529.png' />
                    <h2>Salon For Men</h2>

                </div>
            </div>


            <Heading>Home Services</Heading>
            <div className='homeCategory'>
                <div className='homeCategory-innerDiv'>

                    <Avatar size={'sm'} src='https://cdn-icons-png.flaticon.com/512/3421/3421808.png' />
                    <h2>Application Repair</h2>

                </div>
                <div className='homeCategory-innerDiv'>
                    <Avatar size={'sm'} src='https://cdn-icons-png.flaticon.com/512/9470/9470946.png' />
                    <h2>Home Painting</h2>

                </div>
                <div className='homeCategory-innerDiv'>
                    <Avatar size={'sm'} src='https://cdn-icons-png.flaticon.com/512/9470/9470931.png' />
                    <h2>Cleaning & Pest</h2>

                </div>
                <div className='homeCategory-innerDiv'>
                    <Avatar size={'sm'} src='https://cdn-icons-png.flaticon.com/512/9696/9696832.png' />
                    <h2>Disinfection</h2>

                </div>
            </div>

            <Stack>
                <Heading>Appliances</Heading>
                <Text fontSize='xl' color={'grey'} margin={'auto'}>Servicing, Repair,Installation & Uninstallation</Text>
            </Stack>



            <div className='appliances_category'>
                <Card maxW='xs' boxShadow={'none'}>
                    {/* <CardBody> */}
                    <Image
                        src='https://5.imimg.com/data5/SELLER/Default/2022/8/NO/ED/NQ/44203826/water-geyser-500x500.jpeg'
                        borderRadius='lg'
                        className='app_cat_card'
                    />
                    <Stack mt='6' spacing='3'>
                        <Text fontSize='md'>Geyser Repair</Text>
                    </Stack>
                    {/* </CardBody> */}
                </Card>

                <Card maxW='xs' boxShadow={'none'}>
                    {/* <CardBody> */}
                    <Image
                        src='https://5.imimg.com/data5/SELLER/Default/2022/8/NO/ED/NQ/44203826/water-geyser-500x500.jpeg'
                        borderRadius='lg'
                        className='app_cat_card'
                    />
                    <Stack mt='6' spacing='3'>
                        <Text fontSize='md'>Water Purifier Repair</Text>
                    </Stack>
                    {/* </CardBody> */}
                </Card>

                
            </div>

            <Stack marginTop={'5%'}>
                <Heading>Cleaning & Pest Control</Heading>
            </Stack>

            <div className='appliances_category'>
                

                <Card maxW='xs' boxShadow={'none'}>
                    {/* <CardBody> */}
                    <Image
                        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                        className='app_cat_card'
                    />
                    <Stack mt='6' spacing='3'>
                        <Text fontSize='md'>Water Purifier Repair</Text>
                    </Stack>
                    {/* </CardBody> */}
                </Card>

                <Card maxW='xs' boxShadow={'none'}>
                    {/* <CardBody> */}
                    <Image
                        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                        className='app_cat_card'
                    />
                    <Stack mt='6' spacing='3'>
                        <Text fontSize='md'>Water Purifier Repair</Text>
                    </Stack>
                    {/* </CardBody> */}
                </Card>
            </div>

            <Stack marginTop={'5%'}>
                <Heading>Home Repairs</Heading>
            </Stack>
            <div className='appliances_category'>
                <Card maxW='xs' boxShadow={'none'}>
                    {/* <CardBody> */}
                    <Image
                        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                        className='app_cat_card'
                    />
                    <Stack mt='6' spacing='3'>
                        <Text fontSize='md'>Water Purifier Repair</Text>
                    </Stack>
                    {/* </CardBody> */}
                </Card>

               

                <Card maxW='xs' boxShadow={'none'}>
                    {/* <CardBody> */}
                    <Image
                        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                        className='app_cat_card'
                    />
                    <Stack mt='6' spacing='3'>
                        <Text fontSize='md'>Water Purifier Repair</Text>
                    </Stack>
                    {/* </CardBody> */}
                </Card>
            </div>
        </>
    )
}