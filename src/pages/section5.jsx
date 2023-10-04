import { Container, Stack } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import GalleryData from "../data/Gallary.json"
import { useRef } from 'react';
import { Image } from 'antd';

export default function Gallery() {
    const targetRef = useRef(null);

    return (
        <>
            <Container>
                <Stack pt={10} pb={4} direction={"row"}>
                    <div className="col-md-12">
                        <div className="section-subtitle">Latest Works</div>
                        <div className="section-title">Our <span>Gallery</span></div>
                    </div>
                </Stack>
            </Container>
            <Container ref={targetRef} >
                <Stack flexWrap={"wrap"} direction={"row"} justifyContent={{ xs: "center", sm: "space-evenly", md: "space-between", lg: "space-between" }} alignItems={"center"} >
                    {GalleryData.map((item) => (
                        <div key={item} className="gallery-page__single">
                            <div className="gallery-page__img">

                                <Image decoding="async" src={item.img} alt="gallery"></Image>
                                <div className="gallery-page__icon">
                                    <a className="img-popup" href="/#"><AddIcon sx={{ fontSize: '2em' }} /></a>
                                </div>
                            </div>
                        </div>
                    ))}
                </Stack>
            </Container>
        </>
    )
}

