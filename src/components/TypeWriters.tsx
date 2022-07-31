import React from 'react'
import { Typewriter } from '@chrisfieldsii/react-use-typewriter'
import '@chrisfieldsii/react-use-typewriter/dist/index.css'

const Typewriters = () => {
  return (
    <>
      <h1 className='typewriter'>
        {' '}
        <span>
          <Typewriter
            loop
            cursor
            cursorStyle='|'
            typeSpeed={90}
            deleteSpeed={35}
            delaySpeed={1500}
            words={['Instagram - jinhyo___', 'Mail - admin@jinhyo.dev','Github - jinhyo-dev' ,'Discord - Jinhyo#4116']}
          />
        </span>
      </h1>
    </>
  )
}

export default Typewriters