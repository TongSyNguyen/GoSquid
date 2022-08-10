import React, { useState } from 'react'

function Categories() {
  const [categories, index] = useState([
    {tier: 'Epic'},
    {tier: 'Common'},
    {tier: 'Rare'},
    {tier: 'Legendary'},
    {tier: 'Mythic'},
  ])
  return (
    <div className='flex flex-row'>
      {categories.map(cate =>(
        <div className='bg-gradient-to-r from-[#DA458F] to-[#DA34DD] rounded-md py-1 px-3 mb-10 mr-5 w-fit ' key={index}>
          {cate.tier}
        </div>
      ))}
    </div>
  )
}

export default Categories