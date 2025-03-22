"use client"

import React, { useState } from 'react'
import { Button } from '../ui/button'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const MobileMenu = () => {

  const [isOpneMenu, setIsOpenMenu] = useState(false)
  return (
    <div>
      <div className='lg:hidden'>
        <Button onClick={() => setIsOpenMenu(!isOpneMenu)}>
          {
            isOpneMenu ? <AiOutlineClose/> : <AiOutlineMenu/>
          }
        </Button>
      </div>
    </div>
  )
}

export default MobileMenu