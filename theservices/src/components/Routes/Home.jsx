import { Button, option, Text, Flex, Input, Select, Stack, Heading, Avatar } from '@chakra-ui/react'
import '../styles/Home.css';
import { Card, CardHeader, CardBody, CardFooter, StackDivider, Box } from '@chakra-ui/react'

export default function Home() {
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
                <Flex>
                    <Heading textAlign={'center'} margin={'auto'} >
                        Home services, on demand
                    </Heading>
                </Flex>
                <Flex>
                    <Select bg={'whiteAlpha.700'} width='11%' placeholder='Choose City' marginTop={'250px'} marginLeft='16%' marginRight='-12%'>
                        <option>Choose City</option>
                    </Select>
                    <Input bg={'whiteAlpha.700'} width='60%' margin={'auto'} marginTop={'250px'} placeholder='Search for Services' />
                </Flex>
            </div>


            <div className='homeCategory'>
                <div className='homeCategory-innerDiv'>

                    <Avatar size={'sm'} src='https://cdn-icons-png.flaticon.com/512/6029/6029106.png' />
                    <h2>Salon For Women</h2>

                </div>
                <div className='homeCategory-innerDiv'>
                    <Avatar size={'sm'} src='https://cdn-icons-png.flaticon.com/512/6029/6029080.png' />
                    <h2>Hair, Skin & Nails</h2>

                </div>
                <div className='homeCategory-innerDiv'>
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
                <Text fontSize='xl' color={'grey'}>Servicing, Repair,Installation & Uninstallation</Text>
            </Stack>

            <Card maxW='sm'>
                <CardBody>
                    <Image
                        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>Living room Sofa</Heading>
                        <Text>
                            This sofa is perfect for modern tropical spaces, baroque inspired
                            spaces, earthy toned spaces and for people who love a chic design with a
                            sprinkle of vintage design.
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                            $450
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='blue'>
                            Buy now
                        </Button>
                        <Button variant='ghost' colorScheme='blue'>
                            Add to cart
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </>
    )
}