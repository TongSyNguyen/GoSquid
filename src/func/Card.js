import React, {useState} from 'react'
import {FaEthereum} from 'react-icons/fa'
import {AiFillHeart} from 'react-icons/ai'


function Card () {
    const [users, index] = useState([
      {name: 'The DJ', price: '2.75 ETH', ava:'../../images/theDJ.png', ownerName: 'Ghozali_Ghozalu', tier: 'Epic', bg: '../../images/bgdj.png', ownerAva: '../../images/ownerAva.png', },
      {name: 'Assasin', price: '2.75 ETH', ava:'../../images/assassin.png', ownerName: 'Ghozali_Ghozalu', tier: 'Common', bg: '../../images/bgassassin.png', ownerAva: '../../images/ownerAva.png',},
      {name: 'Neon Guy', price: '2.75 ETH', ava: '../../images/neonGuy.png', ownerName: 'Ghozali_Ghozalu', tier: 'Rare', bg: '../../images/bgneon.png', ownerAva: '../../images/ownerAva.png',},
      {name: 'Assasin', price: '2.75 ETH', ava:'../../images/assassin.png', ownerName: 'Ghozali_Ghozalu', tier: 'Common', bg: '../../images/bgassassin.png', ownerAva: '../../images/ownerAva.png',},
      {name: 'Mafia England', price: '2.75 ETH', ava: '../../images/mafia.png', ownerName: 'Ghozali_Ghozalu', tier: 'Legendary', bg: '../../images/bgmafia.png', ownerAva: '../../images/ownerAva.png',},
      {name: 'Bassketball Girl', price: '2.75 ETH', ava: '../../images/basketballGirl.png', ownerName: 'Ghozali_Ghozalu', tier: 'Mythic', bg: '../../images/bgbasket.png', ownerAva: '../../images/ownerAva.png',},
      {name: 'The DJ', price: '2.75 ETH', ava:'../../images/theDJ.png', ownerName: 'Ghozali_Ghozalu', tier: 'Epic', bg: '../../images/bgdj.png', ownerAva: '../../images/ownerAva.png', },
      {name: 'Bassketball Girl', price: '2.75 ETH', ava: '../../images/basketballGirl.png', ownerName: 'Ghozali_Ghozalu', tier: 'Mythic', bg: '../../images/bgbasket.png', ownerAva: '../../images/ownerAva.png',},
      {name: 'Assasin', price: '2.75 ETH', ava:'../../images/assassin.png', ownerName: 'Ghozali_Ghozalu', tier: 'Common', bg: '../../images/bgassassin.png', ownerAva: '../../images/ownerAva.png',},
      {name: 'Neon Guy', price: '2.75 ETH', ava: '../../images/neonGuy.png', ownerName: 'Ghozali_Ghozalu', tier: 'Rare', bg: '../../images/bgneon.png', ownerAva: '../../images/ownerAva.png',},
      {name: 'Mafia England', price: '2.75 ETH', ava: '../../images/mafia.png', ownerName: 'Ghozali_Ghozalu', tier: 'Legendary', bg: '../../images/bgmafia.png', ownerAva: '../../images/ownerAva.png',},
      {name: 'Neon Guy', price: '2.75 ETH', ava: '../../images/neonGuy.png', ownerName: 'Ghozali_Ghozalu', tier: 'Rare', bg: '../../images/bgneon.png', ownerAva: '../../images/ownerAva.png',},
      {name: 'The DJ', price: '2.75 ETH', ava:'../../images/theDJ.png', ownerName: 'Ghozali_Ghozalu', tier: 'Epic', bg: '../../images/bgdj.png', ownerAva: '../../images/ownerAva.png',},
      {name: 'Assasin', price: '2.75 ETH', ava:'../../images/assassin.png', ownerName: 'Ghozali_Ghozalu', tier: 'Common' , bg: '../../images/bgassassin.png', ownerAva: '../../images/ownerAva.png',},
      {name: 'Neon Guy', price: '2.75 ETH', ava: '../../images/neonGuy.png', ownerName: 'Ghozali_Ghozalu', tier: 'Rare', bg: '../../images/bgneon.png', ownerAva: '../../images/ownerAva.png',},
      {name: 'Assasin', price: '2.75 ETH', ava:'../../images/assassin.png', ownerName: 'Ghozali_Ghozalu', tier: 'Common', bg: '../../images/bgassassin.png', ownerAva: '../../images/ownerAva.png',},
      {name: 'Mafia England', price: '2.75 ETH', ava: '../../images/mafia.png', ownerName: 'Ghozali_Ghozalu', tier: 'Legendary', bg: '../../images/bgmafia.png', ownerAva: '../../images/ownerAva.png',},
      {name: 'Bassketball Girl', price: '2.75 ETH', ava: '../../images/basketballGirl.png', ownerName: 'Ghozali_Ghozalu', tier: 'Mythic', bg: '../../images/bgbasket.png', ownerAva: '../../images/ownerAva.png',},
      {name: 'The DJ', price: '2.75 ETH', ava:'../../images/theDJ.png', ownerName: 'Ghozali_Ghozalu', tier: 'Epic', bg: '../../images/bgdj.png', ownerAva: '../../images/ownerAva.png',},
      {name: 'Bassketball Girl', price: '2.75 ETH', ava: '../../images/basketballGirl.png', ownerName: 'Ghozali_Ghozalu', tier: 'Mythic', bg: '../../images/bgbasket.png', ownerAva: '../../images/ownerAva.png',},
    ]);
    return (
      <div className="showData flex flex-row flex-wrap gap-8">
        {users.map(user =>
            (
            <div className='p-3 rounded-lg border-[#313B4580] border-[1px] bg-[#313B4580] w-[22%] h-[37vh]' key={index}>
              <div className='mb-3 rounded-sm relative w-full h-[72%]'>
                  <img className='absolute z-0 bottom-0 w-full h-full object-fill' src={user.bg} alt=''/>
                  <div className='absolute z-1 top-[6px] left-[6px] rounded-[4px] text-xs px-2 py-1 bg-[#313B4580]'>{user.tier}</div>
                  <div className='absolute z-1 top-[6px] right-[6px] rounded-[4px] text-lg px-2 py-1'><AiFillHeart/></div>
                  <img className='absolute z-1 bottom-0 w-full h-4/5 ' src={`${user.ava}`} alt=''/>
              </div>
              <div className='flex flex-row m-1 items-center my-3'>
                <div className='text-sm font-bold w-[60%]'>{user.name}</div>
                <div className='text-[12px] w-[40%] text-right items-center inline-block'><FaEthereum className='inline-block'/>{user.price}</div>
              </div>
              <div className='flex flex-row m-1 items-center'>
                <img className='w-[15%] h-[15%]' src={`${user.ownerAva}`} alt=''/>
                <div className='text-[12px] ml-1'>{user.ownerName}</div>
              </div>
            </div> 
            )
        )}
        
      </div>
    ); }

export default Card