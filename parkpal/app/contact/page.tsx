import React from 'react'
import Image from 'next/image'
import Footer from "@/app/ui/footer"
import parklines from "@/public/parklines3.png"
import Form from '../forms/form'

export default function Contact() {
  return (
    <div>
      <div className="w-full h-14 bg-white">
      </div>
      {/* Quote */}
      <div className="w-full h-auto bg-texture">
        <div className='w-full h-auto py-10 z-10 flex flex-col justify-center items-center gap-8 text-center text-white text-3xl font-normal'>
          <p>Simplify finding and paying for parking spaces with us today.</p>
        </div>
      </div>


      {/* Contact Us section */}
      <div className='h-auto w-full py-10'>
        <div className='w-full h-auto px-32 flex justify-between text-[#183456]'>

          {/* Contact info */}
          <div className='w-1/2 flex flex-col space-y-4 pr-20'>
            <p className='text-4xl'>Contact Us</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultrices euismod sodales. Proin sit amet convallis ipsum. Ut sollicitudin diam a ex lobortis accumsan. Curabitur ligula ante, rutrum quis feugiat at, congue eu nisi. Vestibulum venenatis, diam non elementum eleifend, ex ex rhoncus magna, et fermentum risus turpis eu turpis. Ut sed pellentesque leo. Cras at massa augue</p>
            <div className='space-y-4 font-semibold'>
              <p>* myparkpal@gmail.com</p>
              <p>* +074085930257</p>
              <p>* Glasgow, G42 1DL</p>
            </div>
          </div>

          {/* Contact form */}
          <Form/>

        </div>

      </div>

      <Footer />
    </div>
  )
}
