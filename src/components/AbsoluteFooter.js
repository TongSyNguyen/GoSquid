import React from 'react'

const AbsoluteFooter = () => {
  return (
    <div className='absolute-footer px-32 bg-footer'>
      <div className='border-t-2 border-slate-600 flex py-8 font-inter text-xs'>
        <div className='w-1/2'>©2022 GoSquid. All Rights reserved.</div>
        <div className='grid grid-flow-row grid-cols-6 w-1/2 justify-items-end'>
          <div></div>
          <div></div>
          <div></div>
          <div>Security</div>
          <div>Legal</div>
          <div>Privacy</div>
        </div>
      </div>
    </div>
  )
}
export default AbsoluteFooter;
