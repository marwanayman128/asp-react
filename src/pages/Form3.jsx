import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import {
    Stack,
    TextField,
    CircularProgress,
    Button
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
            <form style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }} ref={form} onSubmit={sendEmail}>
                <Stack width={{ xs: "100%", sm: "100%", md: "90%", lg: "90%", xl: "90%" }} gap={2} direction={"row"}>
                    <Stack width={"100%"} gap={2} direction={"column"} color={"white"}>
                        <TextField name="user_name" style={{ width: "100%", border: "1px solid #ed5521", color: "white" }} InputProps={{ style: { color: 'white', '&::placeholder': { color: 'white' }, }, }} placeholder="Name" type=""  ></TextField>
                        <TextField name="phone_number" style={{ width: "100%", border: "1px solid #ed5521", color: "white" }} InputProps={{ style: { color: 'white', '&::placeholder': { color: 'white' }, }, }} placeholder="Number" type=""  ></TextField>
                        <TextField name="user_email" style={{ width: "100%", border: "1px solid #ed5521", color: "white" }} InputProps={{ style: { color: 'white', '&::placeholder': { color: 'white' }, }, }} placeholder="Email" type=""  ></TextField>
                        <Button type="submit" style={{ backgroundColor: "#ed5521", outline: "none", color: "white", border: "none", padding: "12px 0", display: "flex", justifyContent: "center", alignItems: "center" }}>SUBMIT</Button>

                    </Stack>
                    <Stack width={"100%"}>
                        <TextField name='message' multiline rows={7} columns={4} style={{ width: "100%", border: "1px solid #ed5521", color: "white" }} InputProps={{ style: { color: 'white', '&::placeholder': { color: 'white' }, }, }} placeholder="Message here..." type=""  ></TextField>
                    </Stack>

                </Stack>
            </form>

        </>
    );
}
