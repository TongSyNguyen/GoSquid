import Card from '../func/Card';
import React from 'react';
import SiderBar from '../func/SiderBar';
import Categories from '../func/Categories';


const MainContent = () => {
  return (
    <div className='main-content w-3/4'>
      <Categories />
      <Card />
    </div> 
  );
}


const Content = () => {
  return (
    <div className='main px-32 py-20 bottom-20 flex flex-row'>
      <SiderBar />
      <MainContent />
    </div>
  )
}
export default Content;
