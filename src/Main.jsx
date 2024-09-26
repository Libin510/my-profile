import React from 'react'
import profileimg from "../src/Assets/profile2.jpg"
import resume from "../src/Assets/my_resume.pdf"
function Main() {
  const phoneNumber = "+918086024296"
  const encodedMessage = "Hello"
  return (
    <div className='bg-black text-white text-center py-16'>
        <img className="mx-auto mb-8 w-32 h-32 md:w-48 2xl:w-48 lg:w-48 2xl:h-48 lg:h-48 md:h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105" src={profileimg}/>
        <h1 className='text-lg 2xl:text-3xl md:text-3xl font-bold'>I am {" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-500'>Libin Thomas</span>
            ,MERN-Stack Developer
        </h1>
        <p className='mt-4 2xl:text-lg md:text-lg  text-gray-300 w-10/12 mx-auto text-center'>I am Libin Thomas, a passionate MERN stack developer with over a year of experience in building modern, responsive web applications. I have completed a six-month internship in the MERN stack and am currently working as a React JS developer in Kerala. With a strong foundation in JavaScript and a keen eye for detail, I specialize in creating dynamic user interfaces and seamless user experiences. I'm always eager to learn new technologies and take on exciting projects that challenge my skills and help me grow as a developer.</p>
        <div className='mt-8 space-x-4'>
          <a href='https://wa.me/+918086024296'
           class="whatsapp_float"
           target="_blank"
           rel="noopener noreferrer">
            <button className='bg-gradient-to-r from-violet-400 to-blue-500 text-white  md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'
           > WhatsApp Me</button></a>
            <a href={resume} download>
            <button className='bg-gradient-to-r from-green-500 to-blue-500 text-white  md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Resume</button></a>
        </div>
    </div>
  )
}

export default Main