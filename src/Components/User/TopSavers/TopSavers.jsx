import React from "react";
import './TopSavers.css';
import waterDropImage from "../../../../public/images/waterDrop.png";
import userProfileIcon01 from "../../../../public/images/recent-user-1.png";
import userProfileIcon02 from "../../../../public/images/recent-user-2.png";
import userProfileIcon03 from "../../../../public/images/recent-user-3.png";
import userProfileIcon04 from "../../../../public/images/recent-user-4.png";

const TopSavers = () => {
  return (
    <div className='relative w-full p-5 bg-white border shadow-lg rounded-xl'>
      <img className='absolute top-0 left-0 w-10 h-8' src={waterDropImage} alt="" />
      <h1 className='ml-12 text-xl font-bold '>Top Savers</h1>
      
      <div className='w-full px-5 mt-10 overflow-y-auto'>
        <div className='flex items-center justify-between px-5 mb-8 user-row'>
            <img src={userProfileIcon02}  alt="" />
            <p className='text-lg font-bold' style={{color: '#158df7'}}>Moin</p>
            <span className='px-3 py-1 text-white bg-blue-400 rounded-lg'>2800Ltr/Mon</span>
            <p style={{color: '#158df7'}}>moinmaniyar122@gmail.com</p>
        </div>
        <div className='flex items-center justify-between px-5 mb-8 user-row'>
            <img src={userProfileIcon01}  alt="" />
            <p className='text-lg font-bold' style={{color: '#158df7'}}>Rushikesh</p>
            <span className='px-3 py-1 text-white bg-blue-400 rounded-lg'>2901Ltr/Mon</span>
            <p style={{color: '#158df7'}}>rushikeshkharat704@gmail.com</p>
        </div>
        <div className='flex items-center justify-between px-5 mb-8 user-row'>
            <img src={userProfileIcon03}  alt="" />
            <p className='text-lg font-bold' style={{color: '#158df7'}}>Owais</p>
            <span className='px-3 py-1 text-white bg-blue-400 rounded-lg'>2994Ltr/Mon</span>
            <p style={{color: '#158df7'}}>owaisraza7297@gmail.com</p>
        </div>
        <div className='flex items-center justify-between px-5 mb-8 user-row'>
            <img src={userProfileIcon04}  alt="" />
            <p className='text-lg font-bold' style={{color: '#158df7'}}>Samarth</p>
            <span className='px-3 py-1 text-white bg-blue-400 rounded-lg'>3100Ltr/Mon</span>
            <p style={{color: '#158df7'}}>samarthurane72@gmail.com</p>
        </div>
        <div className='flex items-center justify-between px-5 mb-8 user-row'>
            <img src={userProfileIcon02}  alt="" />
            <p className='text-lg font-bold' style={{color: '#158df7'}}>Sourav</p>
            <span className='px-3 py-1 text-white bg-blue-400 rounded-lg'>3122Ltr/Mon</span>
            <p style={{color: '#158df7'}}>souravsharma45@gmail.com</p>
        </div>
      </div>
      

        
    </div>
  );
};

export default TopSavers;
