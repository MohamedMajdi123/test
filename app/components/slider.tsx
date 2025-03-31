import { useRef, useState, useEffect } from 'react';
import Slide from './slide'; // تأكد من أن لديك مكون Slide

const allSlider = [
    {
        id: 0,
        url: "images/hero/slider-bg2.jpg",
        offer: "Big Sale Offer",
        title: "Get the Best Deal on CCTV Camera",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        shop: "Combo Only:",
        price: "590.00"
    },
    {
        id: 1,
        url: "images/hero/slider-bg1.jpg",
        offer: "No restocking fee ($35 savings)",
        title: "M75 Sport Watch",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        shop: "Now Only",
        price: "320.99"
    },
    {
        id: 4,
        url: "images/hero/slider-bg2.jpg",
        offer: "Big Sale Offer",
        title: "Get the Best Deal on CCTV Camera",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        shop: "Combo Only:",
        price: "590.00"
    }
];

export default function Slider() {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % allSlider.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (sliderRef.current) {
            if(currentIndex ===  0) {
                setTimeout(() => {
                    if(sliderRef.current) {
                        setCurrentIndex(1);
                        sliderRef.current.style.transform = `translateX(-${currentIndex * 100 / allSlider.length}%)`;
                        sliderRef.current.style.transition = "none";
                    }
                }, 5)
            } else {
                sliderRef.current.style.transform = `translateX(-${currentIndex * 100 / allSlider.length}%)`;
                sliderRef.current.style.transition = "transform 0.4s ease-in-out";
            }
        }
    }, [currentIndex]);

    return (
        <div className="main-box">
            <div className="slider d-flex" ref={sliderRef} style={{ display: 'flex', width: `${(allSlider.length) * 100}%` }}>
                {allSlider.map((slide) => (
                    <Slide 
                        url={slide.url} 
                        key={slide.id} 
                        title={slide.title} 
                        offer={slide.offer} 
                        shop={slide.shop} 
                        describtion={slide.description} 
                        price={slide.price} 
                    />
                ))}
            </div>

            <style jsx>{`
                .slider {
                    display: flex;
                    transition: transform 0.4s ease-in-out;
                }

                .slide {
                    flex: 0 0 100%; /* كل شريحة تأخذ عرض الحاوية */
                }
            `}</style>
        </div>
    );
}