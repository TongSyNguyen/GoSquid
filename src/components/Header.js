import React from 'react'
import logo from '../images/logo.png'
import world from '../images/world.png'
import drop from '../images/dropdownVecter.png'

const Logo = () => {
  return (
    <div className='logo basis-1/12 cursor-pointer'>
        <img src={logo} alt=""/>
    </div>
  );
}

const MainMenu = () => {
  return (
    <ul className='menu basis-8/12 text-center flex justify-start h-16 lg:h-[84px] leading-16 lg:leading-[84px] gap-16'>
        <li className=' h-full '><a className='text-xs lg:text-sm font-thin' href="">HOME</a></li>
        <li className=' h-full '><a className='text-xs lg:text-sm font-thin' href="">ABOUT US</a></li>
        <li className=' h-full '><a className='text-xs lg:text-sm font-thin' href="">OUR TEAMS</a></li>
        <li className=' h-full '><a className='text-xs lg:text-sm font-thin' href="">MARKETPLACE</a></li>
        <li className=' h-full '><a className='text-xs lg:text-sm font-thin' href="">ROADMAP</a></li>
        <li className=' h-full '><a className='text-xs lg:text-sm font-thin' href="">WHITEPAPER</a></li>
      </ul>
  );
}

const ConnectWalletBtn = () => {
  return (
    <div className='btn-connect flex justify-end basis-2/12 h- items-center'>
        <button className='bg-gradient-to-r from-first to-last text-white text-sm font-inter font-semibold w-32 rounded-sm my-4
        lg:w-40 lg:h-10 lg:rounded-[4px] lg:font-medium lg:text-base '>
          <span>Connect Wallet</span>
        </button>
    </div>
  );
}

const WorldDownBtn = () => {
  return (
    <ul className='flex justify-center basis-1/12'>      
        <li className='cursor-pointer'>
          <img src={world} alt=''/>
        </li>
        <li className='cursor-pointer'> 
          <img src={drop} alt=''/>
        </li>
      </ul>
  );
}

const Header = () => {
  return (
    <div className='top-header w-full h-16 lg:h-[84px] flex flex-row font-drone items-center justify-between px-32 bg-header'>
      <Logo />
      <MainMenu />
      <ConnectWalletBtn />
      <WorldDownBtn />
    </div>
  );
}

export default Header;