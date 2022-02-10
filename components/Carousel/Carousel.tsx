import React, { useEffect, useState } from "react";
import styles from '../../styles/Carousel.module.css';
import Image from 'next/image';

interface CarouselSlide{
    title: string;
    text: string;
    imgPath: string;
}

interface CarouselProps {
    nSlides: number;
    content: CarouselSlide[]
}


function Carousel(props: CarouselProps) {

    const [visibleSlide, setVisibleSlide] = useState(0);

    const getSlideStyle = (index: number) => {
        if (index === visibleSlide) return styles.carousel_container;
        else return styles.carousel_container_hidden;
    }

    const changeSlide = (slide: number) => {
        setVisibleSlide(slide);
    }

    const getButtonStyle = (index: number) => {
        if (index === visibleSlide) return styles.carousel_button_selected;
        else return styles.carousel_button;
    }

    useEffect(() => {
        // Automatically change slides every 5 seconds
        const timer = setTimeout(() => visibleSlide === props.nSlides - 1 ? setVisibleSlide(0) : setVisibleSlide(visibleSlide + 1), 5000);
        return () => clearTimeout(timer);
    }, [props.nSlides, visibleSlide])

    return (
        <div className={styles.carousel}>
            {props.content.map((value, index) => (
                
                <div className={getSlideStyle(index)} key={index}>
                <div className={styles.carousel_text}>
                    <h1>{value.title}</h1>
                        <h4>{value.text}</h4>
                </div>
                <div className={styles.carousel_image}>
                        <Image src={value.imgPath} alt="carousel-image" width={1200} height={1200}/>
                </div>
            </div>
            ))}
        
            <div className={styles.carousel_buttons}>
                {
                    props.content.map((_,index) => (
                        <button className={getButtonStyle(index)} onClick={() => changeSlide(index)} key={index} />
                    ))
                }
            </div>
        </div>
    )
}

export default Carousel;