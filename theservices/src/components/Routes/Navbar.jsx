import { ReactNode } from 'react';
import '../styles/Navbar.css';
import {
    Box,
    Flex,
    Avatar,
    Link,
    Text,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useAuth0 } from "@auth0/auth0-react";


const NavLink = ({ children }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={'#'}>
        {children}
    </Link>
);

export default function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { loginWithRedirect, logout } = useAuth0();
    const { user, isAuthenticated, isLoading } = useAuth0();


    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    {/* <Box>Logo</Box> */}
                    <img
                        id='logo'
                        src={'https://www.linkpicture.com/q/InShot_20230221_192504271.png'}
                        alt='Logo image here'
                    />

                    <Menu>
                        <MenuButton>
                            <Link to='/Blog' className="navHeading">
                                <Text fontSize='xl'>Blog</Text>
                            </Link>
                        </MenuButton>
                    </Menu>
                    <Menu>
                        <MenuButton>
                            <Link to='/About' className="navHeading">
                                <Text fontSize='xl'>About Us</Text>
                            </Link>
                        </MenuButton>
                    </Menu>
                    <Menu>
                        <MenuButton>
                            <Link to='/Help' className="navHeading">
                                <Text fontSize='xl'>Help</Text>
                            </Link>
                        </MenuButton>
                    </Menu>
                    {/* <Menu>
                        <MenuButton>
                            <Center>
                                {isAuthenticated && <p>Welcome back {user.name} !</p>}
                            </Center>
                        </MenuButton>
                    </Menu> */}
                    {/* <Flex>
                        <Link to='/Blog' className="navHeading">
                            <h5>Blog</h5>
                        </Link>
                        <Link to='/Help' className="navHeading">
                            <h5>Help</h5>
                        </Link>
                        <Link to='/Login' className="navHeading">
                            <h5>Login/Sign Up</h5>
                        </Link>
                    </Flex> */}

                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            <Button onClick={toggleColorMode}>
                                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                            </Button>

                            <Menu>
                                <MenuButton
                                    as={Button}
                                    rounded={'full'}
                                    variant={'link'}
                                    cursor={'pointer'}
                                    minW={0}>
                                    {!isAuthenticated ? <Avatar
                                        size={'sm'}
                                        src={'https://avatars.dicebear.com/api/male/username.svg'}
                                    /> : <Avatar
                                        size={'sm'}
                                        src={'https://www.linkpicture.com/q/IMG_20230127_172343.jpg'}
                                    />}
                                </MenuButton>
                                <MenuList alignItems={'center'}>
                                    <br />
                                    <Center>
                                        {!isAuthenticated ? <Avatar
                                        size={'2xs'}
                                        src={'https://avatars.dicebear.com/api/male/username.svg'}
                                    /> : <Avatar
                                        size={'2xl'}
                                        src={'https://www.linkpicture.com/q/IMG_20230127_172343.jpg'}
                                    />}
                                    </Center>
                                    <br />
                                    <Center>
                                        <Text fontSize={'2xl'}>{isAuthenticated && <p>{user.name}</p>}</Text>
                                    </Center>
                                    <br />
                                    <MenuDivider />
                                    <MenuItem>Your Servers</MenuItem>
                                    <MenuItem>Account Settings</MenuItem>
                                    <Button>
                                    {
                                        isAuthenticated ? <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                            Log Out
                                        </button> : <button onClick={() => loginWithRedirect()}>Log In</button>
                                    }
                                    </Button>
                                </MenuList>
                            </Menu>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}















































// import { Link } from "react-router-dom";
// import '../styles/Navbar.css';

// export default function Navbar() {

//     return (
//         <>
//             <div id="navbarDiv">
//                 <div id="navLeft">
//                     <Link to='/' className="navHeading">
//                         <img id="logo" src="https://www.linkpicture.com/q/InShot_20230221_192504271.png" />
//                     </Link>
//                 </div>
//                 <div id="navRight">
//                     <Link to='/Blog' className="navHeading">
//                         <h5>Blog</h5>
//                     </Link>
//                     <Link to='/Register' className="navHeading">
//                         <h5>Resgister As A Professional</h5>
//                     </Link>
//                     <Link to='/Help' className="navHeading">
//                         <h5>Help</h5>
//                     </Link>
//                     <Link to='/Login' className="navHeading">
//                         <h5>Login/Sign Up</h5>
//                     </Link>
//                 </div>
//             </div>
//         </>
//     )
// }