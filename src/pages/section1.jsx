import { useEffect, useRef, useState } from 'react';
import '@splidejs/splide/dist/css/themes/splide-default.min.css'; // Import Splide CSS
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Box, Container, Stack, Typography } from '@mui/material';
import mostSale from '../data/mostsale.json';
import ZoomIn from '../Animation/scroll/scrollAnimation/ZoomIn';
import Form from './Form';
import Form2 from './Form2';
function MostSale({ setEmailSent }) {
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
            }, 450);
        }
    };
    const handleMouseEnter = () => {
        setIsPaused(true); // Pause the automatic slide advancement
    };

    const handleMouseLeave = () => {
        setIsPaused(false); // Resume the automatic slide advancement
    };




    return (
        <>



            <Splide
                className='MostSaleParentSlider1'
                ref={mainSliderRef}
                options={{
                    type: 'loop',
                    heightRatio: 0.425, pagination: false, arrows: false, cover: true, gap: 100,
                    breakpoints: { 1200: { heightRatio: 0.575 }, 1050: { height: "550px" }, 900: { gap: 1150 } },
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
                            <Stack width={{ xs: "800px", sm: "800px", md: "100%", lg: "100%", xl: "100%" }} direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                                <Stack  >
                                    <Box sx={{ width: { xs: "50%", sm: "70%", md: "90%", lg: "90%", xl: "90%" } }}>
                                        <div className="section-subtitle"><Typography color={"#fff"}>Best Home Builders and Home Renovation</Typography></div>
                                        <h1 className="h1-slider" style={{ color: "#fff" }}>Renovate Your House With The Experts</h1>
                                        <p style={{ color: "#fff" }}>We pride ourselves on being able to provide our clients with a wide range of building services and support.</p>
                                        <a style={{ margin: "0 30px 0 0", textDecoration: "none" }} href="#contact" className="button-primary">Get A Free Quote Now</a>
                                    </Box>

                                </Stack>
                                <Stack display={{ xs: "none", sm: "none", md: "none", lg: "flex", xl: "flex" }}>
                                    <Form setEmailSent={setEmailSent} />
                                </Stack>

                            </Stack>
                        </Container>
                        <Box component="div" sx={{ background: "linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent)", position: "absolute", bottom: "0", width: "100%", height: "25%" }} />

                    </SplideSlide>
                ))}
            </Splide >
            <Form2 setEmailSent={setEmailSent} />




        </>
    );
}

export default MostSale;
