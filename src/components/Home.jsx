import React, { useState } from 'react'
import Landing from './Landing'
import Login from './Login'

const Home = () => {
    const [current, setCurrent] = useState('Landing')
  return (
    <div className='bg-white'>
     {current === 'Landing' && <Landing setCurrent={setCurrent}/>}
     {current === 'Login' && <Login />}
    </div>
  )
}

export default Home
