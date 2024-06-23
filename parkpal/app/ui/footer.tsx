import React from 'react';

const Footer = () => {
    return (
        <div className='w-full h-auto bg-gray-200 px-20 py-10 leading-tight'>
            <div className='w-full h-auto flex justify-center space-x-2 text-md leading-tight'>
                <p className=''>Download the free App on</p>
                <a className='text-blue-950 underline' href='#'>Android</a>
                <p className='text-md leading-tight'>|</p>
                <a className='text-blue-950 underline' href='#'>Apple</a>
                <p className='px-2'>&</p>
                <p className=''>Subscribe</p>
            </div>
            <div className='mt-4 w-full h-auto flex flex-col items-center space-y-2 leading-tight text-md'>
                {/* <p className=''>&</p>
                <p className=''>Subscribe</p> */}

                <form className='flex w-1/4 items-center space-x-2 text-sm py-4'>
                    <input className='w-3/4 py-2 px-4 rounded-full text-md' placeholder='Email Address'></input>
                    <button className='w-1/4 bg-[#183456] text-white py-2 px-4 rounded-full text-md'>Sign up</button>
                </form>
            </div>
        </div>
    );
}

export default Footer;
