import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

import bannerImg from "@/assets/banner.jpg"

const Banner = () => {
  return (
    <div className='bg-slate-100'>
      <div className='py-8 px-4 lg:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-8'>
        {/* image */}
        <div>
          <Image src={bannerImg} alt='bannerImg'/>
        </div>

        <div className='space-x-4 flex flex-col'>
          <h4 className='text-sm font-medium text-gray-500'>Technology</h4>
          <h2 className='text-3xl font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, sit!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident tempora recusandae quibusdam odit, modi necessitatibus doloremque. Praesentium magni aut nobis itaque quam adipisci dolore maxime, earum recusandae ad facere laborum? 
            <br /> <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi laudantium aperiam a! Incidunt voluptatem maxime facere optio expedita. Molestiae temporibus earum porro in veniam obcaecati saepe necessitatibus enim incidunt vitae.
          </p>
          <Button variant='default'>Read More</Button>
        </div>
      </div>
    </div>
  )
}

export default Banner