import { Fab, Zoom, useScrollTrigger } from "@mui/material";
import "./ScrollToTop.css";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';


const SpeedDial = () => {
  const phoneNumber = '+0416141221'; // Replace with your desired phone number

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
  return (
    <Zoom in={useScrollTrigger({ threshold: 100 })}>
      <Fab
        onClick={handleCallClick}
        variant="extended"
        size="small"
        sx={{
          position: "fixed", bottom: 95, right: 33, borderRadius: "50%", width: 50, height: 50, backgroundColor: "#ED5521",
          "&:hover": {
            backgroundColor: "#000000",
          },
        }}
        aria-label="add"

      >
        <LocalPhoneIcon fontSize="medium" style={{ color: "white" }} />
      </Fab>
    </Zoom>
  );
};

export default SpeedDial;
