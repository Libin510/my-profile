import React, { useState } from 'react'
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
import axios from "axios"
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Flex, Spin } from 'antd';
import "../Style/Style.css"
function Contact() {
  const [loading, setLoading] = useState(false);
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    message: Yup.string().required('Message is required'),
  });
 
  
    const handleSubmit = (values, { setSubmitting, resetForm }) => {
      setLoading(true)
      axios.get('https://email-sender-libin510.onrender.com', {
        params: {
          email: values.email,
          name: values.name,
          message: values.message,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          console.log('Success', response.data.message);
          toast.success('Message Sended!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            })
          resetForm();
        } else {
          console.log('Unexpected response', response.data);
          alert('Something went wrong, please try again later.');
        }
      })
      .catch((error) => {
        console.log('Failure', error.response ? error.response.data : error.message);
        alert('Something went wrong, please try again later.');
      })
      .finally(() => {
        setSubmitting(false);
        setLoading(false)
      });
    };
  

  

  return (
    <div className="bg-black text-white py-20" id="Contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-xl md:text-3xl 2xl:text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className="text-lg md:text-2xl 2xl:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-500 mb-4">Let's Talk</h3>
            <p className="">I am open to discuss web developement projects or partnership oppertunities.</p>
            <div className="mb-4">
                <FaEnvelope className='inline-block text-violet-400 mr-2' />
                <a href="mailto:libinthomas758@gmail.com" className='hover:underline'>libinthomas758@gmail.com</a>
            </div>
            <div className="mb-4">
                <FaPhoneAlt className='inline-block text-violet-400 mr-2'/>
                <span>+91 8086024296</span>
            </div>
            <div className="mb-4">
                <FaMapMarkedAlt className='inline-block text-violet-400 mr-2'/>
                <span>Kannur,Kerala,India</span>
            </div>
          </div>
          <div className="flex-1 w-full">
             <Formik
              initialValues={{ name: '', email: '', message: '' }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-2">Name</label>
                    <Field
                      type="text"
                      name="name"
                      className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-violet-400"
                      placeholder='Enter your Name'
                    />
                    <ErrorMessage name="name" component="p" className="text-red-500 text-sm" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2">Email</label>
                    <Field
                      type="email"
                      name="email"
                      className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-violet-400"
                      placeholder='Enter your Email'
                    />
                    <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2">Message</label>
                    <Field
                      as="textarea"
                      name="message"
                      className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-violet-400"
                      rows={5}
                      placeholder='Enter your Message'
                    />
                    <ErrorMessage name="message" component="p" className="text-red-500 text-sm" />
                  </div>

                  <button
                    type="submit"
                    className="bg-gradient-to-r from-violet-400 to-blue-500 text-white md:inline transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full min-h-10 h-full"
                    disabled={isSubmitting}
                    // onClick={mesg}
                  >
                     <Flex align="center" gap="middle">
                   { loading ? <Spin size="small"   /> : "Send"}
                    </Flex>
                  </button>
                </Form>
              )}
            </Formik>
        </div>
          
        
        </div>
        
      </div>
      <ToastContainer />
    </div>
  )
}

export default Contact