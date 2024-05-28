import Link from 'next/link';
import Image from 'next/image'
import hi5 from '@/public/hifive.svg'
import lightbulb from '@/public/lightbulb.svg'
import headph from '@/public/headphonescs.svg'

export default function Home() {
  return (
    <main >
      <div className="w-full h-14 bg-white">
      </div>

      {/* Banner - gradient */}

      <div className="w-full h-96 bg-texture">
        <div className='w-full h-96 z-10 flex flex-col justify-center items-center gap-8'>
          <p className='text-white text-5xl font-bold'>Find the perfect parking spot</p>
          <button className='bg-white px-10 py-3 rounded-full font-semibold text-lg text-[#4c6583]'>Learn more</button>
        </div>
      </div>


      {/* Infographics 
      TODO: logos, text
      */}
      <p className='w-full px-32 py-10 text-4xl '>About MyParkPal</p>
      <div className='w-full h-96 px-32 grid grid-cols-3 gap-20'>
        <div className='flex flex-col justify-start space-y-2'>
          <p className='text-2xl'>Our Vision</p>
          <p className=' text-[#183456] text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultrices euismod sodales. Proin sit amet convallis ipsum. Ut sollicitudin diam a ex lobortis accumsan. Curabitur ligula ante, rutrum quis feugiat at, congue eu nisi. Vestibulum venenatis, diam non elementum eleifend, ex ex rhoncus magna, et fermentum risus turpis eu turpis. Ut sed pellentesque leo. Cras at massa augue.</p>
          <div className='w-full flex justify-center p-4'>
            <Image
              className='w-1/4 h-auto'
              src={lightbulb}
              alt='map logo'
            />
          </div>
        </div>

        <div className='flex flex-col justify-start space-y-2'>
          <p className='text-2xl'>Our Partnerships</p>
          <p className=' text-[#183456] text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultrices euismod sodales. Proin sit amet convallis ipsum. Ut sollicitudin diam a ex lobortis accumsan. Curabitur ligula ante, rutrum quis feugiat at, congue eu nisi. Vestibulum venenatis, diam non elementum eleifend, ex ex rhoncus magna, et fermentum risus turpis eu turpis. Ut sed pellentesque leo. Cras at massa augue.</p>
          <div className='w-full flex justify-center p-4'>
            <Image
              className='w-1/4 h-auto'
              src={hi5}
              alt='map logo'
            />
          </div>
        </div>

        <div className='flex flex-col justify-start space-y-2'>
          <p className='text-2xl'>Our Customer Service</p>
          <p className=' text-[#183456] text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultrices euismod sodales. Proin sit amet convallis ipsum. Ut sollicitudin diam a ex lobortis accumsan. Curabitur ligula ante, rutrum quis feugiat at, congue eu nisi. Vestibulum venenatis, diam non elementum eleifend, ex ex rhoncus magna, et fermentum risus turpis eu turpis. Ut sed pellentesque leo. Cras at massa augue.</p>
          <div className='w-full flex justify-center p-4'>
            <Image
              className='w-1/4 h-auto'
              src={headph}
              alt='map logo'
            />
          </div>
        </div>

      </div>

      {/* New section
      TODO: text, footer
      */}
      <div className="w-full h-80 bg-texture mt-10">
        <div className='w-full h-80 z-10 flex flex-col justify-center items-center gap-8 text-center text-white text-3xl font-normal'>
          <p className='w-1/2'>Discover the perfect parking solution. Uncover and pay for parking spaces to fit your needs.</p>
          <p className='w-1/2'>"It's your journey. We make it hassle-free."</p>
        </div>
      </div>

      <div className='w-full h-auto bg-gray-200 p-20'>
        <div className='w-full h-auto flex justify-center space-x-4 text-2xl'>
          <p className=''>Download the free App </p>
          <a className='text-blue-950 underline' href='#'>Android</a>
          <a className='text-blue-950 underline' href='#'>Apple</a>
        </div>
        <div className='mt-10 w-full h-52 flex flex-col items-center space-y-4'>
          <p className='text-2xl'>Subscribe</p>
          <p>Simplify finding and paying for parking spaces with us today.</p>
          <form className='flex flex-col w-1/4 items-center space-y-4'>
            <input className='py-2 px-4 rounded-full' placeholder='Email Address'></input>
            <button className='w-1/3 bg-[#183456] text-white py-2 px-4 rounded-full'>Sign up</button>
          </form>
        </div>
      </div>
    </main>
  );
}
