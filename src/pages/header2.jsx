import {
    Box,
    Container,
    Divider,
    Drawer,
    IconButton,
    Stack,
    Typography,
    useMediaQuery,
} from "@mui/material";
import { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
    Close,
} from "@mui/icons-material";
import CallIcon from '@mui/icons-material/Call';

const Header2 = ({ scrollToService }) => {

    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const [isHeaderSticky, setIsHeaderSticky] = useState(false);

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const closeDrawerAndNavigate = (link) => {
        setState({ ...state, top: false });
    };

    useEffect(() => {
        // Function to handle scroll events
        const handleScroll = () => {
            // Check if the scroll position is greater than a certain threshold (e.g., 100 pixels)
            const isScrollingDown = window.scrollY > 100;
            setIsHeaderSticky(isScrollingDown);
        };

        // Add a scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const phoneNumber = '+0416141221'; // Replace with your desired phone number

    const handleCallClick = () => {
        window.location.href = `tel:${phoneNumber}`;
    };

    const NavigateToHome = () => {
        window.location.href = "/v1/aspbuilding/";
    };

    return (
        <>
            <Stack
                position={isHeaderSticky ? "sticky" : "relative"}
                top={isHeaderSticky ? 0 : "auto"}
                zIndex={isHeaderSticky ? 111111 : "auto"}
                backgroundColor={isHeaderSticky ? "white" : "transparent"}
                transition="all 0.3s"
                direction={"row"}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: { xs: "space-around", sm: "space-around" },
                    py: 1,
                }}
            >

                <Stack onClick={NavigateToHome} pl={{ xs: 0, sm: 0, md: 7, lg: 15, xl: 15 }} display={{ xs: "block", sm: "block" }}>
                    <Box sx={{ cursor: "pointer" }} component={"img"} width={"70%"} src={"https://res.cloudinary.com/dpmu17ns4/image/upload/v1697066780/ASP/n0hep2bcgvmzrsa4qmmo.png"}></Box>
                </Stack>

                {useMediaQuery("(min-width:900px)") && (
                    <Container>
                        <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} >
                            <Stack ml={{ xs: 0, sm: 0, md: 0, lg: 10, xl: 17 }} className="navItemMenu" direction={"row"} gap={4} divider={<Divider orientation="vertical" flexItem />}>
                                <a style={{ textDecoration: "none", color: "#000" }} href="#services" className="hoverable">Services</a>
                                <a style={{ textDecoration: "none", color: "#000" }} href="#gallery" className="hoverable">Gallery</a>
                                <a style={{ textDecoration: "none", color: "#000" }} href="#contact" className="hoverable">Contact</a>
                            </Stack>

                            <Stack gap={3} direction={"row"} divider={<Divider orientation="vertical" flexItem />}>
                                <Stack display={{ xs: "none", sm: "none", md: "none", lg: "flex", xl: "flex" }} gap={1} direction="row">

                                    <Stack
                                        direction={"row"}
                                        justifyContent={"center"}
                                        alignItems={"center"}
                                        sx={{
                                            bgcolor: "#f4f1ee",
                                            borderRadius: "50%",
                                            width: 50,
                                            height: 50,
                                            transition: "background-color 0.3s", // Add a transition for a smooth color change
                                            "&:hover": {
                                                bgcolor: "#ED5521", // Change the background color on hover
                                            },
                                            cursor: 'pointer'
                                        }}
                                        onClick={handleCallClick}

                                    >
                                        <CallIcon
                                            sx={{ color: "#000" }} />
                                    </Stack>
                                    <Stack onClick={handleCallClick}>
                                        <Typography>Call Us AnyTime</Typography>
                                        <Typography fontWeight={"bold"}>0416 141 221</Typography>
                                    </Stack>
                                </Stack>
                                <a style={{ margin: "0 20px 0 0", textDecoration: "none" }} href="#contact" className="button-primaryy">Contact Now</a>
                            </Stack>
                        </Stack>


                    </Container>
                )}

                {useMediaQuery("(max-width:900px)") && (
                    <IconButton onClick={toggleDrawer("top", true)}>
                        <MenuIcon />
                    </IconButton>
                )}

                <Drawer
                    anchor={"top"}
                    open={state["top"]}
                    onClose={toggleDrawer("top", false)}
                    sx={{ ".MuiPaper-root.css-1sozasi-MuiPaper-root-MuiDrawer-paper": { height: "100%" } }}
                >
                    <Box sx={{ width: "80%", mx: "auto", mt: 6, position: "relative", py: 10 }}>
                        <IconButton
                            sx={{ ":hover": { color: "red", rotate: "180deg", transition: "0.3s" }, position: "absolute", top: 0, right: 10 }}
                            onClick={toggleDrawer("top", false)}
                        >
                            <Close />
                        </IconButton>
                        <Stack direction={"column"} justifyContent={"center"} alignItems={"center"} gap={2}>
                            {[
                                { mainLink: "Services", link: "#services" },
                                { mainLink: "Gallery", link: "#gallery" },
                                { mainLink: "Contact", link: "#contact" },
                            ].map((item) => {
                                return (
                                    <a
                                        key={item.mainLink}
                                        href={item.link}
                                        style={{ textDecoration: "none", color: "inherit", display: "block", margin: "8px 0" }}
                                        onClick={(e) => {
                                            e.preventDefault(); // Prevent the default behavior of anchor tags
                                            closeDrawerAndNavigate(item.link);
                                            // Delay scrolling to the section after the drawer has closed
                                            setTimeout(() => {
                                                const targetId = item.link.substring(1); // Remove the "#" from the link
                                                const targetElement = document.getElementById(targetId);
                                                if (targetElement) {
                                                    targetElement.scrollIntoView({ behavior: 'smooth' });
                                                }
                                            }, 300); // Adjust the delay time as needed (300 milliseconds in this example)
                                        }}
                                    >
                                        <Typography>{item.mainLink}</Typography>
                                    </a>
                                );
                            })}
                        </Stack>
                    </Box>
                </Drawer>

            </Stack>
        </>

    );
};

export default Header2;
