import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';


const HeroSection = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const fadeOut = useSpring({
        opacity: Math.max(1 - scrollY / 600, 0),
        transform: `translateY(${Math.min(scrollY / 5, 0)}px)`
    });

    return (
        <div className='gallery flex justify-center items-center h-screen bg-center bg-cover'>
            <div className=' flex flex-col items-center'>
                {/* <div className='center-btn'>
                    <Link className='btn-home pb-1 m-2' to='home' smooth={true} duration={500}>HOME</Link>
                    <span className='btn-gallery pb-1 m-2'>GALLERY</span>
                </div> */}
                <animated.div className="hero-text text-[70px] mt-5 font-system-ui text-white" style={fadeOut}>Galleries</animated.div>
            </div>
           
        </div>
    );
};

export default HeroSection;
