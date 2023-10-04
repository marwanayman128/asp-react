import {
    Box,
    Container,
    Stack,
    Typography,

} from "@mui/material";



const Header1 = () => {

    return (
        <Box
            sx={{
                bgcolor: "#ED5521",
                py: "4px",

            }}
        >

            <Container>
                <Stack justifyContent={"center"} alignItems={"center"} >
                    <Typography sx={{ fontSize: 15, color: "white", textAlign: "center" }}>Best Home Builders & Home Renovation in Dundas, Sydney</Typography>
                </Stack>
            </Container>
        </Box>
    );
};

export default Header1;
