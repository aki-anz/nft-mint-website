import { Box, Button, Flex, Image, Link } from '@chakra-ui/react';
import Facebook from './assets/social-media-icons/facebook_32x32.png';
import Twitter from './assets/social-media-icons/twitter_32x32.png';
import Email from './assets/social-media-icons/email_32x32.png';

const NavBar = ({accounts, setAccounts}) => {
const isConnected = Boolean(accounts[0]);

const connectWallet = async() => {
    if(window.ethereum) {
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        });
    if(accounts.length) {
        setAccounts(accounts[0]);
    }
}
}

    return (
        <Flex justify="space-between" align="center" padding="30px">
        <Flex justify="space-around" width="40%" padding="0 75px">
            <Link href="https://www.facebook.com">
                <Image src={Facebook} boxSize="42px" margin="0 15px" />
            </Link>
            <Link href="https://www.twitter.com">
                <Image src={Twitter} boxSize="42px" margin="0 15px" />
            </Link>
            <Link href="https://www.gmail.com">
                <Image src={Email} boxSize="42px" margin="0 15px" />
            </Link>
            </Flex>

        {isConnected ? (
        <Box margin="0 15px">Connected</Box>
        ) : (
            <Button
            backgroundColor="#D6517D"
            borderRadius="5px"
            boxShadow="0px 2px 2px 1px #0F0F0F"
            color="white"
            cursor="pointer"
            fontFamily="inherit"
            padding="15px"
            margin="0 15px" 
            onClick={connectWallet}
            >
                connect
                </Button>
        )
        }
        </Flex>
    );
}

export default NavBar;