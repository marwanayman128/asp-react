import '@splidejs/splide/dist/css/themes/splide-default.min.css'; // Import Splide CSS
import { Splide, SplideSlide } from "@splidejs/react-splide";
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
                                        <div className="img"> <img src="https://res.cloudinary.com/dpmu17ns4/image/upload/v1697067089/ASP/services/tlgqcapir6692yqsutms.jpg" alt="" /> </div>
                                    </div>
                                    <div className="cont">
                                        <div className="service-icon"> <i className="asp-new-construction" /> </div>
                                        <h5><a style={{ textDecoration: "none" }} href="services-page.html">Building Services</a></h5>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>

                                <div className="item mb-30">
                                    <div className="service-img">
                                        <div className="img"> <img src="https://res.cloudinary.com/dpmu17ns4/image/upload/v1697067088/ASP/services/gkuuvgn4k7x4drzjcsr0.jpg" alt="dummy" /> </div>
                                    </div>
                                    <div className="cont">
                                        <div className="service-icon"> <i className="asp-construction-sign" /> </div>
                                        <h5><a style={{ textDecoration: "none" }} href="services-page.html">Commercial & Residential</a></h5>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="item mb-30">
                                    <div className="service-img">
                                        <div className="img"> <img src="https://res.cloudinary.com/dpmu17ns4/image/upload/v1697067088/ASP/services/eeyyshkvk1j4oulws1up.jpg" alt="dummy" /> </div>
                                    </div>
                                    <div className="cont">
                                        <div className="service-icon"> <i className="asp-factory" /> </div>
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
