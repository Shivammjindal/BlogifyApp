import React from 'react'
import { Link } from 'react-router-dom'

function ContactUs() {
    return (
        <>
            <div className=' min-h-96 text-black py-1 px-5 bg-slate-100 w-10/12 mx-auto border-[1px] mt-6 border-black rounded-xl'>
                <div className='mt-2 text-4xl px-4 pb-3 pt-2 font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent opacity-90 relative'>Contact Us</div>
                <div className='flex text-justify px-4 mt-2'>

                    <div>
                    
                    <div>
                        We'd love to hear from you! Whether you have a question, a suggestion, or just want to say hello, we're here to listen. Get in touch with us using the information below:
                    </div>

                    <div className='mt-2'>
                        <div className='font-semibold'>
                            General Inquiries:
                        </div>
                        For general questions, feedback, or inquiries about Blogify, please email us at <a className=' text-blue-400' href="mailto:shivamjindals2002@gmailcom">shivamjindals2002@gmail.com</a>
                    </div>

                    <div className='mt-2'>
                        <div className='font-semibold'>
                            Technical Support:
                        </div>
                            Encountering an issue with our website or need technical assistance? Reach out to our support team at <a className=' text-blue-400' href="mailto:shivamjindals2002@gmailcom">shivamjindals2002@gmail.com</a>, and we'll do our best to assist you promptly.
                    </div>
                    
                    <div className='mt-2'>
                        <div className='font-semibold'>
                            Contributions & Submissions:
                        </div>
                        Are you a writer interested in contributing to Blogify? We welcome guest submissions! and submit your work to <a className=' text-blue-400' href="https://github.com/Shivammjindal/BlogifyApp">https://github.com/Shivammjindal/BlogifyApp</a>
                    </div>
                   </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs