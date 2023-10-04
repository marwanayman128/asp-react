import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import {
    Stack,
    Typography,
    TextField,
    Divider,
    CircularProgress,
} from '@mui/material';

export default function Contact({ setEmailSent }) {
    const form = useRef();

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);

        emailjs
            .sendForm('service_0ddyb9l', 'template_2790ybp', form.current, '9sgOe7r-ELP1nMQZx')
            .then((result) => {
                console.log(result.text);

                if (result.text === 'OK') {
                    setEmailSent(true);
                    navigate('/v1/aspbuilding/Success');
                }
            })
            .catch((error) => {
                console.log(error.text);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };
    return (
        <>

            {isLoading && (
                <div className="">
                    <CircularProgress
                        size={68}
                        sx={{
                            color: '#ed5521',
                            position: 'fixed',
                            top: '50%',
                            left: '50%',
                            zIndex: 1000000,
                            transform: 'translate(-50%, -50%)',
                        }}
                    />
                </div>
            )}
            <form ref={form} onSubmit={sendEmail}>
                <Stack alignItems="center" justifyContent={"center"} direction={"column"} padding={"20px "} spacing={2} sx={{ width: { xs: "300px", sm: "300px", md: "300px", lg: "500px", xl: "500px" }, backgroundColor: "rgba(0, 0, 0, 0.4)" }}>
                    <Stack gap={2} width={"100%"} direction={"column"} justifyContent={"start"}>
                        <Typography fontSize={"20px"} color={"white"} >24 HOURS, 7 DAYS A WEEK
                        </Typography>
                        <Divider color={"white"} fontSize={"20px"} width={"10%"} />
                    </Stack>
                    <TextField
                        style={{ width: "100%", border: "1px solid #ed5521", color: "white" }}
                        name="user_name"
                        placeholder="Name"
                        type=""
                        InputProps={{
                            style: {
                                color: 'white',
                                '&::placeholder': {
                                    color: 'white', // Placeholder text color
                                },
                            },
                        }}
                    />
                    <TextField
                        style={{ width: "100%", border: "1px solid #ed5521", color: "white" }}
                        name="phone_number"
                        placeholder="Phone"
                        type=""
                        InputProps={{
                            style: {
                                color: 'white',
                                '&::placeholder': {
                                    color: 'white', // Placeholder text color
                                },
                            },
                        }}
                    />
                    <TextField
                        style={{ width: "100%", border: "1px solid #ed5521", color: "white" }}
                        name="user_email"
                        placeholder="Email"
                        type=""
                        InputProps={{
                            style: {
                                color: 'white',
                                '&::placeholder': {
                                    color: 'white', // Placeholder text color
                                },
                            },
                        }}
                    />
                    <TextField
                        multiline
                        rows={4}
                        columns={10}
                        style={{ width: "100%", border: "1px solid #ed5521", color: "white" }}
                        name="message"
                        placeholder="Message"
                        type=""
                        InputProps={{
                            style: {
                                color: 'white',
                                '&::placeholder': {
                                    color: 'white', // Placeholder text color
                                },
                            },
                        }}
                    />
                    <Stack width={"30%"} margin={"0 30px 0 30px"}
                        alignItem={"center"} justifyContent={"center"}>
                        <button type='submit' className="button-primary">Submit</button>

                    </Stack>
                </Stack>
            </form>

        </>
    );
}
