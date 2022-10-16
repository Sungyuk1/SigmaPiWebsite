import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white">
       <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
          <div className="pb-8">
              <p>Contact</p>
              <p>Submit the form below to get in touch with me</p>
          </div>

          {/*This is the form part*/}
          <div>
            <form action="">
                <input type="text" name="name" placeholder='Enter your name' className='p-2 bg-transparent border-2
                rounded-md text-white focus:outline-none'/>
                <input type="text" email="name" placeholder='Enter your email' className='p-2 bg-transparent border-2
                rounded-md text-white focus:outline-none'/>
                <textarea className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
            </form>

            <button className="text-white bg-gradient-to-b from-cyan-500
             to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Let's Talk</button>
          </div>
       </div>

    </div>
  )
}

export default Contact