import '@splidejs/splide/dist/css/themes/splide-default.min.css'; // Import Splide CSS
import { Splide, SplideSlide } from "@splidejs/react-splide";
import RoofingIcon from '@mui/icons-material/Roofing';
import ConstructionIcon from '@mui/icons-material/Construction';
import BusinessIcon from '@mui/icons-material/Business';
export default function section3() {
    return (
        <>
            <section className="services center section-padding bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-subtitle">What We Do</div>
                            <div className="section-title">Our <span>Services</span></div>
                        </div>
                    </div>
                    <div className="row">
                        <Splide options={{
                            type: 'loop',
                            pagination: true, arrows: false, cover: true, gap: 50, perPage: 3, height: "500px",
                            breakpoints: { 1200: { height: "570px", perPage: 3 }, 1050: { height: "670px", perPage: 2 }, 600: { heightRatio: 0.7, perPage: 1, pagination: false }, 450: { heightRatio: 0.5, perPage: 1, pagination: false } },
                        }}>
                            <SplideSlide>
                                <div className="item mb-30">
                                    <div className="service-img">
                                        <div className="img"> <img src="https://www.aspbuilding.com.au/data/uploads/images/services/service-1.jpg" alt="" /> </div>
                                    </div>
                                    <div className="cont">
                                        <div className="service-icon"> <RoofingIcon style={{ fontSize: "30px", marginLeft: "15px" }} /> </div>
                                        <h5><a style={{ textDecoration: "none" }} href="services-page.html">Building Services</a></h5>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>

                                <div className="item mb-30">
                                    <div className="service-img">
                                        <div className="img"> <img src="https://www.aspbuilding.com.au/data/uploads/images/services/service-2.jpg" alt="dummy" /> </div>
                                    </div>
                                    <div className="cont">
                                        <div className="service-icon"> <ConstructionIcon style={{ fontSize: "30px", marginLeft: "15px" }} /></div>
                                        <h5><a style={{ textDecoration: "none" }} href="services-page.html">Commercial & Residential</a></h5>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="item mb-30">
                                    <div className="service-img">
                                        <div className="img"> <img src="https://www.aspbuilding.com.au/data/uploads/images/services/service-3.jpg" alt="dummy" /> </div>
                                    </div>
                                    <div className="cont">
                                        <div className="service-icon"> <BusinessIcon style={{ fontSize: "30px", marginLeft: "15px" }} />  </div>
                                        <h5><a style={{ textDecoration: "none" }} href="services-page.html">Construction & Renovation</a></h5>
                                    </div>
                                </div>
                            </SplideSlide>


                        </Splide>
                    </div>
                </div>
            </section>
        </>
    )
}
