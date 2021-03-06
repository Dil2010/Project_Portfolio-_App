import React from 'react';

import HTML from '../assets/icons/html.png';
import CSS from '../assets/icons/css.png';
import JavaScript from '../assets/icons/javascript.png';
import ReactImg from '../assets/icons/react.png';
import Node from '../assets/icons/node.png';
// import FireBase from '../assets/icons/firebase.png';
import AWS from '../assets/icons/aws.png';
import GitHub from '../assets/icons/github.png';
// import Tailwind from '../assets/icons/tailwind.png';
import Mongo from '../assets/icons/mongo.png';
// import Matlab from '../assets/icons/matlab2.png';
// import Matlab from '../assets/icons/matlab2.jfif';
import React_Native from '../assets/icons/react_Native.png';
import SQL from '../assets/icons/Sql.png';
// import Next from '../assets/icons/nextjs.png';
import Next from '../assets/icons/logo-next.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
              {/* <p className='py-4'>// These are the technologies I've worked with</p> */}
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#ebeef2] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#ebeef2] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#ebeef2] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#ebeef2] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#ebeef2] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='shadow-md shadow-[#ebeef2] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                  <p className='my-4'>NODE JS</p>
              </div>
              <div className='shadow-md shadow-[#ebeef2] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Mongo} alt="HTML icon" />
                  <p className='my-4'>MONGO DB</p>
              </div>
              <div className='shadow-md shadow-[#ebeef2] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={AWS} alt="HTML icon" />
                  <p className='my-4'>AWS</p>
              </div>
              {/* <div className='shadow-md shadow-[#ebeef2] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Matlab} alt="HTML icon" />
                  <p className='my-4'>Matlab</p>
              </div> */}
              <div className='shadow-md shadow-[#ebeef2] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={React_Native} alt="HTML icon" />
                  <p className='my-4'>React Native</p>
              </div>
              <div className='shadow-md shadow-[#ebeef2] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={SQL} alt="HTML icon" />
                  <p className='my-4'>SQL</p>
              </div>
              <div className='shadow-md shadow-[#ebeef2] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Next} alt="HTML icon" />
                  <p className='my-4'>NEXT</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;
