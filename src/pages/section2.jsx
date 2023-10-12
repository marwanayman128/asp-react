import CheckIcon from '@mui/icons-material/Check';
export default function section2() {
    return (

        <>
            <section className="about section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mb-30">
                            <div className="section-subtitle">Construction Firm</div>
                            <div className="section-title">About <span>ASP</span></div>
                            <p>ASP Building services are amongst the leading building contractors in Sydney that has been established over twenty-five years and has been involved in various kinds of constructions and buildings such as new buildings as well as renovations and additions and extensions with simple or complex plans and designs. Our building contractors’ jobs are always constantly monitored by qualified inspectors to ensure the highest quality jobs. Our number one priority is our customer’s satisfaction, we are never happy until our clients are. ASP Building Services have been around in Sydney for 29 years, and we always keep your satisfaction and trust as our main aim and priority.</p>
                            <ul className="listext list-unstyled mb-30">
                                <li>
                                    <div className="listext-icon"> <CheckIcon style={{ color: "#fff", backgroundColor: "#ED5521", borderRadius: "50%" }} /> </div>
                                    <div className="listext-text">
                                        <p>Over 25 years of experience</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="listext-icon"> <CheckIcon style={{ color: "#fff", backgroundColor: "#ED5521", borderRadius: "50%" }} /> </div>
                                    <div className="listext-text">
                                        <p>100+ successfully executed projects</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="listext-icon"> <CheckIcon style={{ color: "#fff", backgroundColor: "#ED5521", borderRadius: "50%" }} /> </div>
                                    <div className="listext-text">
                                        <p>Exceptional work quality</p>
                                    </div>
                                </li>
                            </ul>
                            <div className="line-dec" />
                        </div>
                        <div className="col-md-6">
                            <div className="about-img"> <img src="https://res.cloudinary.com/dpmu17ns4/image/upload/v1697066982/ASP/d1c1g4yfnz4rhkwenlpx.jpg" alt="dummy" />
                                <div className="about-img-hotifer">
                                    <p>Our 25 years working experience make a different construction building.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
