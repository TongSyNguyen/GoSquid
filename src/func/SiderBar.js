import React from 'react'
import {FiSearch} from 'react-icons/fi'
import {AiFillCloseCircle} from 'react-icons/ai'



function SiderBar() {
    return (
        <div className='sidebar w-1/4 pr-5'>
          <div className='search  flex flex-row items-center relative h-8 mb-10'>
            <span className='px-3 py-2 absolute '><FiSearch/></span>
            <input className='bg-transparent text-sm absolute w-full rounded-sm border-[1px] border-[#89888B] text-[#89888B] pl-8 py-2' placeholder='Search'/>
          </div>
          

          <div className='sort'>
            

            <label for="tier" className='text-[#89888B] text-sm '>TIER</label>
              <select id="tier" className='w-full bg-transparent rounded-sm border-[1px] border-[#89888B] p-2 my-3 text-xs '>
                <option className='bg-black' value="All">All</option>
                <option className='bg-black' value="Common">Common</option>
                <option className='bg-black' value="Rare">Rare</option>
                <option className='bg-black' value="Epic">Epic</option>
                <option className='bg-black' value="Mythic">Mythic</option>
                <option className='bg-black' value="Legendary">Legendary</option>
            </select>
            <label for="theme" className='text-[#89888B] text-sm '>THEME</label>
              <select id="theme" className='w-full bg-transparent rounded-sm border-[1px] border-[#89888B] p-2 my-3 text-xs '>
                <option className='bg-black' value="Halloween">Halloween</option>
            </select>
            <label for="time" className='text-[#89888B] text-sm '>TIME</label>
              <select id="time" className='w-full bg-transparent rounded-sm border-[1px] border-[#89888B] p-2 my-3 text-xs '>
                <option className='bg-black' value="Lastest">Lastest</option>
                <option className='bg-black' value="Oldest">Oldest</option>
            </select>
            <label for="price" className='text-[#89888B] text-sm '>PRICE</label>
              <select id="price" className='w-full bg-transparent rounded-sm border-[1px] border-[#89888B] p-2 my-3 text-xs '>
                <option className='bg-black' value="Low to high">Low to high</option>
                <option className='bg-black' value="High to low">High to low</option>
            </select>
            
            <div className='text-xs flex items-center'><AiFillCloseCircle className='mr-2 text-yellow-500'/>Reset filter</div>
          </div>
        </div>
      );
    }

export default SiderBar;