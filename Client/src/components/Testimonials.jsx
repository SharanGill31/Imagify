import React from 'react';
import { assets, testimonialsData } from '../assets/assets';
import { motion } from 'framer-motion'

const Testimonials = () => {
  return (
    <motion.div 
    initial={{opacity:0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    className='flex flex-col items-center justify-center my-20 py-12'>
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>
        Customer testimonials
      </h1>
      <p className='text-gray-500 mb-12'>What Are Users Are Saying</p>
      <div className='flex flex-wrap gap-6 justify-center'>
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="bg-white/20 p-12 rounded-lg shadow-md border w-80 m-auto cursor-pointer hover:scale-[1.02] transition-all">
            <div className="flex flex-col items-center">
              <img src={testimonial.image} alt={testimonial.name} className='rounded-full w-14 mb-2' />
              <h2 className='text-xl font-semibold mt-3'>{testimonial.name}</h2>
              <p className='text-gray-500 mb-4'>{testimonial.role}</p>
              <div className='flex mb-4'>
                {Array.from({ length: testimonial.stars }).map((_, starIndex) => ( 
                  <img key={starIndex} src={assets.rating_star} alt="Rating Star" className="w-4 h-4 mr-1" /> 
                ))}
              </div>
              <p className="text-center text-sm text-gray-600">{testimonial.text}</p> 
              {/* Removed redundant testimonial paragraph */}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;