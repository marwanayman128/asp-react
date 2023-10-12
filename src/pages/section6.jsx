import '@splidejs/splide/dist/css/themes/splide-default.min.css'; // Import Splide CSS
import { Splide, SplideSlide } from "@splidejs/react-splide";
export default function section6() {
    return (
        <>
            <section className="testimonials">
                <div className="background bg-img  section-padding pb-0 LastSectionBackground" data-overlay-dark={4}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 mb-30 valign">
                                <div className="vid-area">
                                    <div className="vid-icon">
                                    </div>
                                    <div className="cont mt-30 mb-30">
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5 offset-md-1">
                                <div className="testimonials-box">
                                    <div className="head-box">
                                        <h6>What said about us</h6>
                                        <h4>Customer Reviews</h4>
                                    </div>
                                    <Splide
                                        options={{
                                            type: 'loop',
                                            pagination: true, arrows: false, cover: true, gap: 100, width: '370px',
                                        }}
                                    >
                                        <SplideSlide>

                                            <div className="item"> <span className="quote"><img src="https://res.cloudinary.com/dpmu17ns4/image/upload/v1697067610/ASP/lgyimxds4ujaeesc0tzm.png" alt="" /></span>
                                                <p className="v-border">Very professional and friendly. Got the job done quickly with no issues. Even offered to do a bit extra for free. Would highly recommend them to anyone looking for repairs or renovations in the home.</p>
                                                <div className="info">
                                                    <div className="author-img"> <img src="https://res.cloudinary.com/dpmu17ns4/image/upload/v1695774891/lztk5e2xfcj6f8xhtysr.png" alt="" /> </div>
                                                    <div className="cont">
                                                        <h6>Aaron G from Plumpton, NSW</h6> <span>Builder</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </SplideSlide>


                                        <SplideSlide>
                                            <div className="item"> <span className="quote">
                                                <img src="https://res.cloudinary.com/dpmu17ns4/image/upload/v1697067610/ASP/lgyimxds4ujaeesc0tzm.png" alt="" />
                                            </span>
                                                <p className="v-border">Alan and his team from ASP building service were excellent. They communicated with me all the time and got the job done very well. I would like to recommend Alan to my friends in the future for sure.</p>
                                                <div className="info">
                                                    <div className="author-img"> <img src="https://res.cloudinary.com/dpmu17ns4/image/upload/v1695774891/lztk5e2xfcj6f8xhtysr.png" alt="" /> </div>
                                                    <div className="cont">
                                                        <h6>Bao from Hornsby, NSW</h6> <span>Door Carpenter</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </SplideSlide>


                                        <SplideSlide>
                                            <div className="item"> <span className="quote">
                                                <img src="https://res.cloudinary.com/dpmu17ns4/image/upload/v1697067610/ASP/lgyimxds4ujaeesc0tzm.png" alt="" />
                                            </span>
                                                <p className="v-border">Excellent. Strongly recommended. Alan and his team are friendly and very hard working. They took care to keep tidy and organized and discussed the details of the job. Completed the job in the time frame. Very happy to hire again!</p>
                                                <div className="info">
                                                    <div className="author-img"> <img src="https://res.cloudinary.com/dpmu17ns4/image/upload/v1695774891/lztk5e2xfcj6f8xhtysr.png" alt="" /> </div>
                                                    <div className="cont">
                                                        <h6>Emily P from Hornsby, NSW</h6> <span>Builder</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </SplideSlide>

                                    </Splide>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="clients">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="owl-carousel owl-theme">
                                <div className="clients-logo">
                                </div>
                                <div className="clients-logo">
                                </div>
                                <div className="clients-logo">
                                </div>
                                <div className="clients-logo">
                                </div>
                                <div className="clients-logo">
                                    <a href="#0"><img src="img/clients/5.png" alt="" /></a>
                                </div>
                                <div className="clients-logo">
                                    <a href="#0"><img src="img/clients/6.png" alt="" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5" />
                    </div>
                </div>
            </section>
        </>
    )
}
