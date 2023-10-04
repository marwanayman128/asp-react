/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Container, Stack, Typography } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Form3 from "./Form3";

export default function footer({ setEmailSent }) {



    const phoneNumber = '+0416141221';

    const handleCallClick = () => {
        window.location.href = `tel:${phoneNumber}`;
    };
    return (
        <>



            <footer className="footer clearfix">
                <Container sx={{ pb: 5 }}>
                    {/* First footer */}
                    <div className="first-footer">
                        <Stack mb={5}>
                            <Stack gap={2} direction={"row"}>
                                <Typography color={"#fff"} pb={2} variant="h4" >GET IN </Typography>
                                <Typography variant="h4" color={"#ed5521"}>TOUCH</Typography>

                            </Stack>
                            <Typography width={"50%"}>We are very approachable and would love to speak to you. Feel free to call, send us an email, Tweet us or simply complete the enquiry form.</Typography>

                        </Stack>
                    </div>


                    {/* Second footer */}
                    <Stack pt={5} direction={{ xs: "column", sm: "column", md: "row", lg: "row", xl: "row" }} justifyContent={"space-between"} alignItems={"start"}>
                        {/* about & social icons */}
                        <Box pb={{ xs: 5, sm: 5, md: 0, lg: 0, xl: 0 }} width={{ xs: "100%", sm: "100%", md: "40%", lg: "40%", xl: "40%" }}>
                            <Stack gap={4} direction={"column"}>

                                <Stack alignItems={"center"} direction={"row"} gap={2} color={"white"}>
                                    <Box sx={{
                                        width: "50px", height: "50px", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#ed5521"
                                    }}><LocationOnIcon />
                                    </Box>
                                    <Typography>6 winbourne st west Ryde 2114</Typography>

                                </Stack>

                                <Stack alignItems={"center"} direction={"row"} gap={2} color={"white"}>
                                    <Box sx={{
                                        width: "50px", height: "50px", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#ed5521"
                                    }}><EmailIcon />
                                    </Box>
                                    <Typography>info@aspbuilding.com.au</Typography>

                                </Stack>
                                <Stack onClick={handleCallClick} alignItems={"center"} direction={"row"} gap={2} color={"white"}>
                                    <Box sx={{
                                        width: "50px", height: "50px", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#ed5521"
                                    }}><LocalPhoneIcon />
                                    </Box>
                                    <Typography>0416 141 221</Typography>
                                </Stack>


                            </Stack>
                        </Box>
                        <Form3 setEmailSent={setEmailSent} />

                    </Stack>
                    {/* Bottom footer */}
                    <div className="bottom-footer-text">
                        <div className="row copyright">
                            <div className="col-md-12">
                                <p className="mb-0">©2023 <a href="#">ASP Building Services</a>. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </footer>



        </>
    )
}
