import { Typewriter } from "react-simple-typewriter";
// import React from 'react';

const Banner = () => {


    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/mCv0rzh/banner1.jpg)'}}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-xl">
                        <div>
                            <h1 className="mb-5 text-5xl font-bold" style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>Products For you{' '}
                                <span style={{ color: 'teal', fontWeight: 'bold' }}>
                                <Typewriter
                                    words={['Tiles', 'Terra Cotta', 'Stoneware', 'Earthenware']}
                                    loop={100}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                                </span>
                            </h1>
                        </div>
                        <p className="mb-5 md:my-5">Welcome everyone, today I am thrilled to introduce you to our latest clay craft creations, where tradition meets modern appeal</p>
                        <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex  justify-between md:transform  md:-translate-y-1/2 left-5 right-5 md:top-1/2 top-3/4">
                <a href="#slide4" className="btn btn-circle">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
            <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/mT5mQ3T/banner2.jpg)'}}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-xl">
                        <div>
                            <h1 className="mb-5 text-5xl font-bold" style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>Products For you{' '}
                                <span style={{ color: 'teal', fontWeight: 'bold' }}>
                                <Typewriter
                                    words={['Tiles', 'Terra Cotta', 'Stoneware', 'Earthenware']}
                                    loop={100}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                                </span>
                            </h1>
                        </div>
                        <p className="mb-5 md:my-5">Crafted with passion and precision, our clay creations are not just products, they are stories waiting to be told.</p>
                        <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex  justify-between md:transform  md:-translate-y-1/2 left-5 right-5 md:top-1/2 top-3/4">
                <a href="#slide1" className="btn btn-circle">❮</a> 
                <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full">
            <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/0K6NGPq/banner3.jpg)'}}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-xl">
                        <div>
                            <h1 className="mb-5 text-5xl font-bold" style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>Products For you{' '}
                                <span style={{ color: 'teal', fontWeight: 'bold' }}>
                                <Typewriter
                                    words={['Tiles', 'Terra Cotta', 'Stoneware', 'Earthenware']}
                                    loop={100}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                                </span>
                            </h1>
                        </div>
                        <p className="mb-5 md:my-5">In a world dominated by mass production, our clay crafts stand out as unique expressions of artistry, each piece telling its own vibrant tale.</p>
                        <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex  justify-between md:transform  md:-translate-y-1/2 left-5 right-5 md:top-1/2 top-3/4">
                <a href="#slide2" className="btn btn-circle">❮</a> 
                <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide4" className="carousel-item relative w-full">
            <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/231BDPt/banner4.jpg)'}}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-xl">
                        <div>
                            <h1 className="mb-5 text-5xl font-bold" style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>Products For you{' '}
                                <span style={{ color: 'teal', fontWeight: 'bold' }}>
                                <Typewriter
                                    words={['Tiles', 'Terra Cotta', 'Stoneware', 'Earthenware']}
                                    loop={100}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                                </span>
                            </h1>
                        </div>
                        <p className="mb-5 md:my-5">Whether you are a seasoned collector or new to the world of pottery, our clay crafts offer something for everyone, blending timeless charm with contemporary flair</p>
                        <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex  justify-between md:transform  md:-translate-y-1/2 left-5 right-5 md:top-1/2 top-3/4">
                <a href="#slide3" className="btn btn-circle">❮</a> 
                <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
            </div>
    );
};

export default Banner;