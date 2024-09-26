import React from 'react'
import profileimg from "../Assets/profile2.jpg"

function About() {


    const skills = [{
        name:"HTML & CSS",
        ratios:"w-12/12"
    },{
        name:"React j.s",
         ratios:"w-10/12"
    },{
        name:"Node J.s",
         ratios:"w-8/12"
    },{
        name:"Redux",
         ratios:"w-8/12"
    },{
        name:"Git",
         ratios:"w-10/12"
    },{
        name:"Express",
         ratios:"w-8/12"
    }
]
const expertice = [{
    numbers:"1+",
    text:"Years Experience"
},{
    numbers:"5+",
    text:"Project Completed"
},{
    numbers:"",
    text:""
}
]
  return (
    <div className='bg-black text-white py-8 2xl:py-20 md:py-20' id="about">
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-xl md:text-3xl 2xl:text-4xl font-bold text-center mb-12'>About Me</h2>
            <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                <img src={profileimg} className='w-60 h-72 md:w-72 2xl:w-72 lg:w-72 2xl:h-80 lg:h-80 md:h-80 rounded object-cover mb-8 md:mb-0'/>
               <div className='flex-1'>
               <p className='md:text-lg text-center mb-8'>
                    I am a passionate full-stack developer with a focus on building modern and responsive web applications.
                    with a strong foundation
                </p>
                <div className='space-y-4'>
                    {skills?.map((item)=>(
                    <div className='flex items-center'>
                        <label htmlFor="htmlandcss" className='w-2/12'>{item.name}</label>
                        <div className="grow bg-gray-800 rounded-full h-2.5">
                            <div className={`bg-gradient-to-r from-violet-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 ${item.ratios}`}>

                            </div>
                        </div>
                   

                    </div> ))}

                </div>
                <div  className="mt-12 flex justify-between text-center">
                {expertice?.map((items)=>(
                <div>
                    <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-500'>
                       {items.numbers}
                    </h3>
                    <p className="cl">{items.text}</p>
                </div>))}
                </div>
               
               </div>
            </div>
        </div>
    </div>
  )
}

export default About