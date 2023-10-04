import { useEffect, useState } from 'react';
import { Stack, Typography } from '@mui/material';

import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

function MyComponent() {
    const [isVisible, setIsVisible] = useState(true);

    const handleScroll = () => {
        const scrolled = window.scrollY;

        // Check if scrolled is greater than 100 or if isVisible is already false
        if (scrolled > 100 || !isVisible) {
            setIsVisible(false); // Hide the navigation bar when scrolled down
        } else {
            setIsVisible(true); // Show the navigation bar when scrolled up
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const phoneNumber = '+0416141221'; // Replace with your desired phone number

    const handleCallClick = () => {
        window.location.href = `tel:${phoneNumber}`;
    };

    return (
        <div className="my-component">


            <Stack display={{ xs: "flex", sm: "flex", md: "flex", lg: "none", xl: "none" }} py={1} className='sticky-navv' alignItems={"center"} justifyContent={"center"} onClick={handleCallClick} direction={"row"} gap={2} color={"white"}>
                <LocalPhoneIcon style={{ color: "white", fontSize: "2em" }} />
                <Typography fontSize={"1em"} color={"white"}>0416 141 221</Typography>

            </Stack>

        </div>
    );
}

export default MyComponent;