import React, { useEffect, useRef, useState } from 'react';
import '@splidejs/splide/dist/css/themes/splide-default.min.css'; // Import Splide CSS
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Box, Container, Stack, Typography } from '@mui/material';
import mostSale from '../data/mostsale.json';
import { Collapse, IconButton, Alert } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ZoomIn from '../Animation/scroll/scrollAnimation/ZoomIn';
import CloseIcon from '@mui/icons-material/Close';


function MostSale() {
    const mainSliderRef = useRef(null);
    const [selectedSlideIndex, setSelectedSlideIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);



    useEffect(() => {
        if (mainSliderRef.current) {
            const splideInstance = mainSliderRef.current.splide;

            // Start a timer to move to the next slide every 3 seconds
            let intervalId;

            if (!isPaused) {
                intervalId = setInterval(() => {
                    // Check if we are at the last slide (considering loop)
                    if (splideInstance.index === splideInstance.length + 1) {
                        // If at the last slide, move to the first slide (loop)
                        splideInstance.go(0);
                    } else {
                        // Otherwise, move to the next slide
                        splideInstance.go('+');
                    }
                }, 4300);
            }

            // Clean up the interval when the component unmounts
            return () => {
                clearInterval(intervalId);
            };
        }
    }, [isPaused]);
    const handleSlideChange = (splide, newIndex) => {
        const slides = splide.Components.Elements.slides;

        // Reset z-index for all slides
        slides.forEach((slide) => {
            if (slide) {
                slide.style.zIndex = '';
            }
        });

        // Set the z-index for the current and next slides
        const currentSlideIndex = splide.index;
        const nextSlideIndex = newIndex;

        if (currentSlideIndex >= 0 && currentSlideIndex < slides.length) {
            slides[currentSlideIndex].style.zIndex = '1'; // Current slide
        }

        if (nextSlideIndex >= 0 && nextSlideIndex < slides.length) {
            // Use setTimeout to change z-index after a delay
            setTimeout(() => {
                slides[nextSlideIndex].style.zIndex = '2'; // Next slide
            }, 450); // 450ms delay (slightly longer than the transition duration)
        }
    };
    const handleMouseEnter = () => {
        setIsPaused(true); // Pause the automatic slide advancement
    };

    const handleMouseLeave = () => {
        setIsPaused(false); // Resume the automatic slide advancement
    };
    const [open, setOpen] = React.useState(true);
    useEffect(() => {
        // Show the alert with a delay (e.g., 500 milliseconds)
        const showTimeout = setTimeout(() => {
            setOpen(true);
        }, 500);

        // Auto-close the alert after 5 seconds
        const closeTimeout = setTimeout(() => {
            setOpen(false);
        }, 5000);

        // Clear the timeouts when the component unmounts to prevent memory leaks
        return () => {
            clearTimeout(showTimeout);
            clearTimeout(closeTimeout);
        };
    }, []);
    return (
        <>

            <Box
                sx={{
                    width: '350px',
                    position: 'fixed',
                    right: open ? 0 : '-30%', // Slide in from the right or hide to the right
                    zIndex: 100,
                    transition: 'right 0.5s ease', // Slide animation transition
                }}
            >
                <Collapse in={open}>
                    <Alert
                        iconMapping={{
                            success: <CheckCircleIcon fontSize="inherit" style={{ color: '#fff' }} />,
                            // Add mappings for other alert types if needed
                        }}
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                    setOpen(false);
                                }}
                            >
                                <CloseIcon fontSize="inherit" style={{ color: '#fff' }} />
                            </IconButton>
                        }
                        sx={{ mb: 2, color: "#eee", backgroundColor: '#ED5521' }}
                    >
                        The Email was sent successfully!
                    </Alert>

                </Collapse>
            </Box>
            <Splide
                className='MostSaleParentSlider1'
                ref={mainSliderRef}
                options={{
                    type: 'loop',
                    heightRatio: 0.400, pagination: false, arrows: false, cover: true, gap: 100,
                    breakpoints: { 1200: { heightRatio: 0.575 }, 1050: { height: "550px" }, 900: { gap: 1150 }, },
                }}
                onMouseEnter={handleMouseEnter} // Pause when mouse enters
                onMouseLeave={handleMouseLeave} // Resume when mouse leaves
                onMoved={(splide, newIndex) => {
                    setSelectedSlideIndex(newIndex);
                    handleSlideChange(splide, newIndex); // Update the z-index
                }}>
                {mostSale.map((item, index) => (
                    <SplideSlide key={item.id}
                        className={index === selectedSlideIndex ? 'selected-slide' : ''}
                    // Add the 'selected-slide' class to the selected slide
                    >

                        <ZoomIn zoomDuration={5}>
                            <Box
                                width={{ xs: "1000px", sm: "1000px", md: "100%" }}
                                component="img"
                                alt="The house from the offer."
                                src={item.itemImg}
                            />
                            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.4)' }} />
                        </ZoomIn>
                        <Container sx={{ zIndex: 1, color: "#fff", position: "absolute", transform: "translate(-50%, -50%)", top: "50%", left: "50%" }}  >
                            <Stack width={{ xs: "800px", sm: "800px", md: "100%" }} direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                                <Stack  >
                                    <Box sx={{ width: { xs: "80%", sm: "60%", md: "90%", lg: "90%", xl: "90%" } }}>
                                        <div className="section-subtitle"><Typography color={"#fff"}>Best Home Builders and Home Renovation</Typography></div>
                                        <h1 style={{ color: "#fff" }}>Thank you for your submit</h1>
                                        <a href="/v1/aspbuilding/"><button type='submit' className="button-primaryy">Back to home</button></a>
                                    </Box>

                                </Stack>

                            </Stack>
                        </Container>
                        <Box component="div" sx={{ background: "linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent)", position: "absolute", bottom: "0", width: "100%", height: "25%" }} />

                    </SplideSlide>
                ))}
            </Splide>

            <div className="bottom-footer-text" style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "rgb(0, 0, 0)" }}>
                <div className="row copyright">
                    <div className="col-md-12">
                        <p className="mb-0">©2023 <a href="#">ASP Building Services</a>. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MostSale;
