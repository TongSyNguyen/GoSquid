import React from 'react'
import logoFooter from '../images/logoFooter.png'

const Footer = () => {
  return (
    <div className='footer px-32 pt-10 flex flex-row pb-8 bg-footer'>
      <div className='logoFooter basis-2/5'>
        <img className='h-2/5' src={logoFooter} />  
      </div>  
      <div className='basis-3/5 pl-16 flex'>
        <div className='basis-3/4'>
          <p className='font-semibold font-drone mb-9'>NAVIGATION</p>
          <div className='grid-flow-row grid-cols-5 grid gap-3 mb-16'>
            <div className='text-xs font-medium'>Home</div>
            <div className='text-xs font-medium'>Whitepaper</div>
            <div className='text-xs font-medium'>FAQs</div>
            <div className='text-xs font-medium'></div>
            <div className='text-xs font-medium'></div>
            <div className='text-xs font-medium'>About us</div>
            <div className='text-xs font-medium'>Marketplace</div>
            <div className='text-xs font-medium'>News</div>
            <div className='text-xs font-medium'></div>
            <div className='text-xs font-medium'></div>
            <div className='text-xs font-medium'>Our teams</div>
            <div className='text-xs font-medium'>Roadmap</div>
            <div className='text-xs font-medium'>Community</div>
          </div>
          <div className=''>
            <p className='font-thin font-drone pb-7'>Subcribe to receive our latest update</p>
            <form>
              <input className='rounded-sm border border-white bg-transparent text-xs px-2 py-2 w-2/3' 
              placeholder='Your email address' type='text'></input>
              <button className='bg-gradient-to-r from-first to-last rounded-sm 2xl:h-8 text-white text-sm font-bold w-1/4 ml-2'>Subcribe</button>
            </form>
          </div>
        </div>
        <div className='basis-1/4 pl-4'>
          <p className='font-semibold font-drone mb-10'>CONTACT US</p>
          <p className='text-sm font-medium'>0123-456-789</p>
          <p className='text-sm font-medium'>support@gosquid.io</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
