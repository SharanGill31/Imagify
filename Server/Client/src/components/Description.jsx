import React from 'react'
import { assets } from '../assets/assets'
import {motion} from 'framer-motion'

const Description = () => {
  return (
    <motion.div
    initial={{opacity:0.2,y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>
        Create AI Images
      </h1>
      <p className='text-gray-500 mb-8'>Turn your imagination into visuals</p>

     <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
        <img src={assets.sample_img_1} className='w-80 xl:w-96 rounded-lg' />
        <div> 
            <h2 className='text-3xl font-medium max-w-lg mb-4'>Introducing the AI-Powered Text to Image Generator </h2>
            <p className='text-gray-600 mb-4'>
            Our free AI image generator empowers you to effortlessly create high-quality visuals.  Transform your text into eye-catching images with ease.  Describe your concept, and the tool will instantly generate corresponding imagery.
            </p>
            <p className='text-gray-600'>
            Generate high-quality images from text in seconds with our cutting-edge AI.  Effortlessly visualize anything from product visuals to character designs – even abstract concepts.  Limitless creative possibilities await.
            </p>
        </div>
     </div>

    </motion.div>
  )
}

export default Description
