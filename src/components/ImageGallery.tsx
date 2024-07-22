

/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const images = [
  '/assets/bodyimg1.webp',
  '/assets/img2.webp',
  '/assets/img3.webp',
  '/assets/img4.webp',
  '/assets/img5.webp',
  '/assets/img6.webp',
];

const ImageGallery = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 flex items-center justify-center">
        <Carousel 
          showThumbs={false} 
          infiniteLoop={true} 
          autoPlay={true} 
          showStatus={false}
          showIndicators={false}
          centerMode={true}
          centerSlidePercentage={25}
        >
          {images.map((src, index) => (
            <div key={index} className="justify-between items-center p-2">
              <div className="relative flex items-center justify-center w-full h-[420px] md:h-auto overflow-hidden rounded-md group">
                <span className="font-normal text-sm !leading-4 bg-white dark:bg-dark text-dark transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 invisible group-hover:visible tracking-[-3%] absolute top-4 right-5 rounded-full px-2 py-1 z-[2]">
                  <span className="font-light">by</span> Uchechi
                </span>
                <Image 
                  src={src} 
                  alt={`Shot ${index + 1}`} 
                  layout="responsive" 
                  width={200} 
                  height={150} 
                  className="relative object-cover object-center w-full sm:h-auto transition duration-300 rounded-md sm:w-auto z-[1]" 
                  loading="lazy"
                  style={{ color: 'transparent' }}
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <div className='py-20 bg-white text-center justify-center text-2xl'>
        <div className="flex justify-center mb-4">
          <span className="text-[#A5A5A5]"><svg fill="none" width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M40 2.74247L37.2575 0L10 27.2575C6.42141 22.3746 6.95653 15.5184 11.2375 11.2375L11.4381 11.0368L8.69565 8.29431L8.49499 8.49498C2.64215 14.3478 2.10702 23.5451 7.22408 30L0 37.2241L2.74248 39.9665L30 12.709C33.5786 17.592 33.0435 24.4482 28.7291 28.7291L28.5284 28.9298L31.2709 31.6722L31.4716 31.4716C37.3244 25.6187 37.8595 16.4214 32.7425 9.96655L40 2.74247Z"></path></svg></span>
        </div>
        <h2 className='text-5xl font-bold mb-4'>Welcome to photoruum</h2>
        <p className='text-gray-600 mb-6 max-w-lg mx-auto'>At Photoruum, we believe that every snapshot holds a story. Our vision is simple yet powerful:<span className='font-bold'> to unite photographers from every corner of Africa, capturing the heart and soul of this diverse continent.</span> <b style={{ display: 'block', height: '1em' }}></b>Through the collective lens of talented photographers, we aim to celebrate and preserve Africa's unique charm while fostering a nurturing space for skill-building, networking, and creative collaboration.</p>
      </div>
    </section>
  );
};

export default ImageGallery;
