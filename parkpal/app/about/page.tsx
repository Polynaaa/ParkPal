import React from 'react'
import Image from 'next/image'
import roadlogo from '@/public/road.svg'
import Footer from "@/app/ui/footer"

export default function About() {
  return (
    <div>
      <div className="w-full h-14 bg-white">
      </div>
      <div className='w-full h-20 bg-texture'>
        <p className='text-4xl text-white text-center pt-4'>About</p>
      </div>


      {/* What we do section */}
      <div className='w-full px-32'>
        <div className='w-full h-auto flex justify-between'>
          <div className='w-2/3 text-[#183456] p-10 space-y-4'>
            <p className='text-4xl'>What We Do</p>
            <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse ultrices euismod sodales. Proin sit amet convallis ipsum.
              Ut sollicitudin diam a ex lobortis accumsan. Curabitur ligula ante, rutrum quis feugiat at, congue eu nisi.</p>
            <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse ultrices euismod sodales. Proin sit amet convallis ipsum.
              Ut sollicitudin diam a ex lobortis accumsan. Curabitur ligula ante, rutrum quis feugiat at, congue eu nisi.
              Vestibulum venenatis, diam non elementum eleifend, ex ex rhoncus magna, et fermentum risus turpis eu turpis.
              Ut sed pellentesque leo. Cras at massa augue.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse ultrices euismod sodales. Proin sit amet convallis ipsum.
              Ut sollicitudin diam a ex lobortis accumsan. Curabitur ligula ante, rutrum quis feugiat at, congue eu nisi.
              Vestibulum venenatis, diam non elementum eleifend, ex ex rhoncus magna, et fermentum risus turpis eu turpis.
              Ut sed pellentesque leo. Cras at massa augue.</p>
          </div>
          <div className='w-1/3 h-auto p-10 flex justify-center items-center'>
            <Image
              src={roadlogo}
              alt="road"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>

      <div className='h-8 w-full bg-texture rotate-180'></div>
      <div className='mt-4 h-8 w-full bg-texture rotate-180'></div>

      {/* Who we are section */}
      <div className='w-full px-32'>
        <div className='w-full h-auto flex flex-row-reverse justify-between'>
          <div className='w-2/3 text-[#183456] p-10'>
            <p className='text-4xl'>Who We Are</p>
            <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse ultrices euismod sodales. Proin sit amet convallis ipsum.
              Ut sollicitudin diam a ex lobortis accumsan. Curabitur ligula ante, rutrum quis feugiat at, congue eu nisi.
              Vestibulum venenatis, diam non elementum eleifend, ex ex rhoncus magna, et fermentum risus turpis eu turpis.
              Ut sed pellentesque leo. Cras at massa augue.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse ultrices euismod sodales. Proin sit amet convallis ipsum.
              Ut sollicitudin diam a ex lobortis accumsan. Curabitur ligula ante, rutrum quis feugiat at, congue eu nisi.
              Vestibulum venenatis, diam non elementum eleifend, ex ex rhoncus magna, et fermentum risus turpis eu turpis.
              Ut sed pellentesque leo. Cras at massa augue.</p>
          </div>
          <div className='w-1/3 h-auto p-10 flex justify-center items-center'>
            <Image
              src={roadlogo}
              alt="road"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>

      {/* Quote section*/}
      <div className="w-full h-auto bg-texture mt-10">
        <div className='w-full h-auto py-14 z-10 flex flex-col justify-center items-center gap-8 text-center text-white text-3xl font-normal'>
          <p className='w-1/2'>Discover the perfect parking solution. Uncover and pay for parking spaces to fit your needs.</p>
          <p className='w-1/2 italic'>"It's your journey. We make it hassle-free."</p>
        </div>
      </div>

      {/* Footer*/}
      <Footer />



    </div>
  )
}
