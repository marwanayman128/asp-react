
import Header1 from './pages/header1'
import Header2 from './pages/header2'
import Section2 from './pages/section2'
import Section3 from './pages/section3'
import Section4 from './pages/section4'
import Section6 from './pages/section6'
import Footer from './pages/footer'
import ScrollToTop from "./Animation/scroll/scrollToTop/ScrollToTop";
import BottomNavBar from './pages/BottomNav';
import AnimatedCursor from './Animation/Cursor';
import Section1 from './pages/section1'
import { Route, Routes, Navigate } from 'react-router-dom'
import Section5 from './pages/section5'
import { Box } from '@mui/material'
import Success from "./pages//Success";
import SpeedDial from './Animation/scroll/scrollToTop/SpeedDial'
import { useState } from 'react'
function App() {
  const [emailSent, setEmailSent] = useState(false);

  return (
    <>
      <div className="cursor__dot">
        <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color="0, 0 ,0"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        />
      </div>
      <Header1 />
      <Header2 />

      <Routes>

        <Route path="/v1/aspbuilding/" element={<>

          <Section1 setEmailSent={setEmailSent} />
          <Section2 />

          <Box id="services" >
            <Section3 />
          </Box>
          <Section4 />

          <Box id="gallery" >
            <Section5 />
          </Box>

          <Section6 />
          <Footer setEmailSent={setEmailSent} />

        </>} />

        <Route path="/v1/aspbuilding/Success" element={emailSent ? <Success /> : <Navigate to="/v1/aspbuilding/" />} />

      </Routes>

      <Box id="contact">
        <Box></Box>
      </Box>
      <SpeedDial />
      <ScrollToTop />
      <BottomNavBar />

    </>
  )
}

export default App
