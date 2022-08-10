import React from 'react'
import banner from '../images/banner.png'
import newArrival from '../images/newArival.png'
import dj from '../images/dj.png'
import thDJ from '../images/thDJ.png'
import basket from '../images/basketballGirl.png'
import mafia from '../images/mafia.png'
import neon from '../images/neonGuy.png'
import assassin from '../images/assassin.png'

const Banner = () => {
    return (
    <div className='banner relative h-[75vh]'>
      <img className='absolute top-0 px-32 w-3/4 my-14 h-[40%] cursor-pointer' src={newArrival}/>
      <img className='absolute bottom-0' src={banner}/>
      <img className='absolute bottom-0 z-10 right-32 h-dj cursor-pointer' src={dj}/>
      <img className='thDJ absolute z-20 w-85 bottom-4 right-28 cursor-pointer' src={thDJ}/>
      <div className='text-thedj absolute z-30 right-56 bottom-10 font-drone font-black text-6xl cursor-pointer'><p>THE DJ</p></div>
      <img className='basketball-girl absolute z-10 right-basket bottom-4 h-23 cursor-pointer' src={basket}/>
      <img className='mafia absolute z-10 right-mafia bottom-4 h-23 cursor-pointer' src={mafia}/>
      <img className='neon absolute z-10 left-neon bottom-4 h-23 cursor-pointer' src={neon}/>
      <img className='assassin absolute z-10 left-assassin bottom-4 h-23 cursor-pointer' src={assassin}/>
    </div>
    );
}

export default Banner;
