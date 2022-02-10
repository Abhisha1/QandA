import React, { useState } from "react";
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
    return (
        <div className={styles.carousel}>
            {props.content.map((value, index) => (
                
                <div className={getSlideStyle(index)} key={index}>
                <div className={styles.carousel_text}>
                    <h1>{value.title}</h1>
                        <h3>{value.text}</h3>
                </div>
                <div className={styles.carousel_image}>
                        <Image src={value.imgPath} alt="carousel-image" width={600} height={400}/>
                </div>
            </div>
            ))}
        
            <div className={styles.carousel_buttons}>
                {
                    props.content.map((_,index) => (
                        <button className={styles.carousel_button} onClick={() => changeSlide(index)} key={index} />
                    ))
                }
            </div>
        </div>
    )
}

export default Carousel;